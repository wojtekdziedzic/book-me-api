import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { OffersService } from './offers.service';
import { Offer } from './offer.entity';

@Crud({
  model: {
    type: Offer,
  },
})
@Controller('offers')
export class OffersController {
  constructor(public service: OffersService) {}
}
