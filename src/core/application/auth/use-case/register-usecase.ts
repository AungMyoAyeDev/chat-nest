import { Injectable } from "@nestjs/common";

@Injectable()
export class RegisterUsecase {
  constructor() {}
  execute() {
    return "registered...";
  }
}
