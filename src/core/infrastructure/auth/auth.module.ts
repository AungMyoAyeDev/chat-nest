import { Module } from '@nestjs/common';
import { LoginUseCase } from 'src/core/application/auth/use-case/login-use-case';
import { AuthController } from 'src/presentation/auth/auth.controller';

@Module({
    controllers: [AuthController],
    providers:[LoginUseCase]
})
export class AuthModule {
}
