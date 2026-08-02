import { Injectable, NestMiddleware } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Response, Request, NextFunction } from "express"
@Injectable()
export class RequestMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const traceId = req.headers["x-request-id"] || randomUUID()
        req.headers["x-request-id"] = traceId;
        next()
    }
}