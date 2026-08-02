import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { DomainException } from '../exceptions/domain-exception';
import { AppException } from '../exceptions/app-exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    if (exception instanceof DomainException) {
      const statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
      const payload = {
        success: false,
        code: exception.code,
        message: exception.message,
      };
      this.logger.error(
        `${req.method} ${req.url} -> ${JSON.stringify(payload)}`,
      );
      return res.status(statusCode).json(payload);
    }

    if (exception instanceof AppException) {
      const statusCode = exception.getStatus();
      const payload = {
        success: false,
        code: exception.code,
        message: exception.message,
      };
      this.logger.error(
        `${req.method} ${req.url} -> ${JSON.stringify(payload)}`,
      );
      return res.status(statusCode).json(payload);
    }

    if (exception instanceof HttpException) {
      const statusCode = exception.getStatus();
      const payload = exception.getResponse();
      const body =
        typeof payload === 'object' && payload !== null
          ? (payload as Record<string, unknown>)
          : { message: payload };

      this.logger.error(
        `${req.method} ${req.url} -> ${JSON.stringify(payload)}`,
      );
      return res.status(statusCode).json({
        success: false,
        code: (body.code as string) ?? 'HTTP_ERROR',
        message: (body.message as string) ?? exception.message,
      });
    }
    this.logger.error(
      'Unhandled Exception',
      exception instanceof Error ? exception.stack : String(exception),
    );
    return res.status(500).json({
      success: false,
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal Server Error',
    });
  }
}
