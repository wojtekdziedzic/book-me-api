import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { OffersService } from './offers.service';
import { Offer } from './offer.entity';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  model: {
    type: Offer,
  },
})
// @UseGuards(AuthGuard('jwt'))
@Controller('api/offers')
export class OffersController {
  constructor(public service: OffersService) {}
}
