import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { UsersService } from './users.service';
import { User } from './user.entity';
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
    type: User,
  },
})
// @UseGuards(AuthGuard(['local', 'jwt']))
@Controller('users')
export class UsersController {
  constructor(public service: UsersService) {
  }
}
