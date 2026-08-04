import { HttpStatus } from "@nestjs/common";
import { AppException } from "./app-exception";

export class UnauthorizedException extends AppException {
  constructor(code: string, message: string) {
    super({ code, message }, HttpStatus.UNAUTHORIZED);
  }
}
