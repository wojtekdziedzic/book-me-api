import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from './offers/offers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'nestjs-config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import * as path from 'path';
import config from './config/config';

import { Offer } from './offers/offer.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.DB.DATABASE_HOST,
      port: config.DB.DATABASE_PORT,
      username: config.DB.DATABASE_USERNAME,
      password: config.DB.DATABASE_PASSWORD,
      database: config.DB.DATABASE_NAME,
      entities: [Offer, User],
      synchronize: config.DB.DATABASE_SYNCHRONIZE,
    }),
    OffersModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
