import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { OffersService } from './offers.service';
import { Offer } from './offer.entity';
import { ParamOptionType } from '@nestjsx/crud-request';

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
@Controller('offers')
export class OffersController {
  constructor(public service: OffersService) {
  }
}
