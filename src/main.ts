import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
   // helmet is a package to add some security headers to the responses
   app.use(helmet());
   // increase the size of the JSON request
   app.use(json({ limit: '50mb' }));
   app.use(urlencoded({ extended: true, limit: '50mb' }));
   // enable CORS
   app.enableCors();
  await app.listen(4000);
}
bootstrap();
