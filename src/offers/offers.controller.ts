import { Controller, Body, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { OffersService } from './offers.service';
import { Offer } from './offer.entity';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {
  }

  @Get()
  getAllOffers(): Promise<Offer[]> {
    return this.offersService.findAllOffers();
  }

  @Get(':id')
  getOffer(@Param('id') id): Promise<Offer[]> {
    return this.offersService.findOffer(id);
  }

  @Post()
  async addOffer(@Body() offerData: Offer): Promise<any> {
    return this.offersService.createOffer(offerData);
  }

  @Patch(':id')
  async updateOffer(@Param('id') id, @Body() offerData: Offer): Promise<any> {
    offerData.id = Number(id);
    return this.offersService.updateOffer(offerData);
  }

  @Delete(':id')
  async deleteOffer(@Param('id') id): Promise<any> {
    return this.offersService.deleteOffer(id);
  }
}
