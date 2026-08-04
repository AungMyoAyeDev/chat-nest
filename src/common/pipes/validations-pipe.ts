import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";

function flattenValidationError(errors: ValidationError[]): any {
  const result = {};
  for (const err of errors) {
    if (err.constraints)
      (result as any)[err.property] = Object.values(err.constraints);
    if (err.children?.length)
      (result as any)[err.property] = flattenValidationError(err.children);
  }
  return result;
}

@Injectable()
export class ValidationsPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object, {
      whiteList: true,
      ForbidNonWhitelisted: false,
    });
    if (errors.length > 0) {
      const details = flattenValidationError(errors);

      throw new BadRequestException({
        success: false,
        message: "Validation failed.",
        code: "INVALID INPUT",
        details,
      });
    }
    return object;
  }

  private toValidate(metatype: any): boolean {
    const types = [String, Number, Boolean, Array, Object];
    return !types.includes(metatype);
  }
}
