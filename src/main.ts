import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors/logging-interceptor';
import { HttpExceptionFilter } from './common/filter/http-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
