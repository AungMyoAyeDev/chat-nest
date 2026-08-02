import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { map, Observable } from "rxjs";
export interface Response<T> {
    success: boolean,
    message: string,
    statusCode:number,
    data:T
}
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>>{

    constructor(private readonly reflector: Reflector) { }
    
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>>  {
        const res = context.switchToHttp().getResponse()
        const statusCode = res.statusCode;
        const message = this.reflector.get<string>("response_message", context.getHandler()) || "Success";
        return next.handle().pipe(map(data => ({
            success: true,
            message,
            statusCode,
            data
        })))
    }
}