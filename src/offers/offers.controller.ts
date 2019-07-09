import { Controller, Body, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {
  }

  @Post()
  addOffer(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    const generatedId = this.offersService.insertOffer(title, description, price);

    return { id: generatedId };
  }

  @Get()
  getAllOffers() {
    return this.offersService.getOffers();
  }

  @Get(':id')
  getOffer(@Param('id') id: string) {
    return this.offersService.getSingleOffer(id);
  }

  @Patch(':id')
  updateOffer(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    this.offersService.updateOffer(id, title, description, price);
    return null;
  }

  @Delete(':id')
  removeOffer(@Param('id') id: string) {
    this.offersService.deleteOffer(id);
    return null;
  }

}
