import { HttpException } from "@nestjs/common";
export interface AppErrorPayload {
    code: string,
    message: string,
}
export class AppExpection extends HttpException {
    public readonly  code:string
    constructor(
        payload: AppErrorPayload,
        statusCode: number,
    ) {
        super({
            success: false,
            code: payload.code,
            message:payload.message,
        }, statusCode);
        this.code = payload.code;
    }
}