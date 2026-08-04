import { Injectable } from "@nestjs/common";
import { ConflictException } from "src/common/exceptions/conflict-excepton";
import { NotFoundException } from "src/common/exceptions/notfound-exception";
import { UnauthorizedException } from "src/common/exceptions/unauthorized-exception";
import { ValidationException } from "src/common/exceptions/validation-exception";

@Injectable()
export class getAllUser {
  excute() {
    throw new UnauthorizedException("UNAUTHORIZED", "User is not authorized");
  }
}
