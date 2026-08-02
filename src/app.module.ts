import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './core/infrastructure/prisma/prisma.module';
import { UserModule } from './core/infrastructure/user/user.module';
import { AuthModule } from './core/infrastructure/auth/auth.module';
import { RequestMiddleware } from './common/middlewares/request.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './common/interceptors/response-interceptor';

@Module({
  imports: [AuthModule, UserModule, PrismaModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestMiddleware).forRoutes('*');
  }
}
