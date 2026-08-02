import { Controller, Get, HttpException, HttpStatus, Param, Req} from '@nestjs/common';
import type { Request } from 'express';
import { ResponseMessage } from 'src/common/decoraters/response-decorator';
import { ConflictException } from 'src/common/exceptions/conflict-excepton';
import { NotFoundException } from 'src/common/exceptions/notfound-exception';
import { getAllUser } from 'src/core/application/user/use-case/get-all-users';

@Controller('users')
export class UserController {
constructor(private readonly getAlluser:getAllUser){}
    @Get()
    @ResponseMessage("Get all users")
    getAllUsers(@Req() request: Request) {
        return this.getAlluser.excute();
    }
    @Get(":id")
    getUserById(@Param() params: {id:string}) {
        console.log(params.id)
        throw new HttpException("Not found",HttpStatus.NOT_FOUND)
    }
    @Get("notfound")
    getNotFound() {
        throw new NotFoundException("NOT_FOUND", "User not found");
    }
    @Get("conflict")
    getConflict() {
        throw new ConflictException("CONFLICT", "User already exists");
    }
}
