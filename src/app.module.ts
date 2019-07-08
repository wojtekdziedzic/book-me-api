import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersController } from './offers/offers.controller';

@Module({
  imports: [],
  controllers: [AppController, OffersController],
  providers: [AppService],
})
export class AppModule {
}
