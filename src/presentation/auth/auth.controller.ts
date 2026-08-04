import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "src/core/application/auth/dto/login-dto";
import { registerDto } from "src/core/application/auth/dto/register-dto";
import { LoginUseCase } from "src/core/application/auth/use-case/login-use-case";
import { RegisterUsecase } from "src/core/application/auth/use-case/register-usecase";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly loginUseCase: LoginUseCase,
    private readonly registerUseCase: RegisterUsecase,
  ) {}

  @Post("/register")
  register(@Body() registerDto: registerDto) {
    console.log(registerDto, "dto");
    return this.registerUseCase.execute();
  }

  @Post("/login")
  login(@Body() dto: LoginDto) {
    console.log(dto);
    return this.loginUseCase.execute();
  }
}
