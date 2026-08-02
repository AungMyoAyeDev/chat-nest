import { Module } from '@nestjs/common';
import { getAllUser } from 'src/core/application/user/use-case/get-all-users';
import { UserController } from 'src/presentation/user/user.controller';

@Module({
    controllers: [UserController],
    providers:[getAllUser]
})
export class UserModule {
}
