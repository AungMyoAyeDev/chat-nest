import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/core/application/auth/dto/login-dto';
import { LoginUseCase } from 'src/core/application/auth/use-case/login-use-case';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}
  @Post('/login')
  async login(@Body() dto: LoginDto) {
    console.log(dto);
    return this.loginUseCase.execute();
  }
}
