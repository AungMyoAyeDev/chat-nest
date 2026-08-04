import { Module } from "@nestjs/common";
import { LoginUseCase } from "src/core/application/auth/use-case/login-use-case";
import { RegisterUsecase } from "src/core/application/auth/use-case/register-usecase";
import { AuthController } from "src/presentation/auth/auth.controller";

@Module({
  controllers: [AuthController],
  providers: [LoginUseCase, RegisterUsecase],
})
export class AuthModule {}
