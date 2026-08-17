import { Inject, Injectable } from "@nestjs/common";
import { REPOSITORY_TOKEN } from "src/common/constant/repository -config";
import { UserRepository } from "src/core/domain/user/user.repository";
import { registerDto } from "../dto/register-dto";
import { ValidationException } from "src/common/exceptions/validation-exception";

@Injectable()
export class RegisterUsecase {
  constructor(
    @Inject(REPOSITORY_TOKEN.USER)
    private readonly userRepository: UserRepository,
  ) {}
  async execute(input: registerDto) {
    if (!input.email || !input.password) {
      throw new ValidationException("INVALID INPUt", "");
    }
  }
}
