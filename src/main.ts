import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { log } from 'util';
import * as dotenv from 'dotenv';
import * as path from 'path';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // @ts-ignore
    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}

async function bootstrap() {

  const { NODE_ENV } = process.env;
  const CONFIG = await dotenv.config(
    {
    path: path.resolve(
      process.cwd(),
      !NODE_ENV
        ? '.env'
        : `.env.${NODE_ENV}`,
    ),
  }).parsed;

  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  await app.enableCors({
    origin: CONFIG.CORS_OPTIONS_ORIGIN,
    methods: CONFIG.CORS_OPTIONS_METHODS,
    allowedHeaders: CONFIG.CORS_OPTIONS_ALLOWED_HEADERS,
  });

  await app.useGlobalFilters(new HttpExceptionFilter());

  const listener = await app.listen(
    CONFIG.PROCESS_PORT,
    () => {
      // log(require('dotenv').config().parsed);
      log('['.concat(new Date().toLocaleString()).concat('] - app listening on port: ' + listener.address().port));
      log('['.concat(new Date().toLocaleString()).concat('] - env: ' + JSON.stringify(CONFIG, undefined, 2)));
    },
  );
}

bootstrap()
  .then(() => undefined)
  .catch(() => undefined);
