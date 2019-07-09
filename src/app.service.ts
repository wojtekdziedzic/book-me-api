import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  index = (): string => 'I\'m working :)';
}
