import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
  }

  public async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  public async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.usersService.getUser(name);
    if (await this.compareHash(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.name,
      sub: user.id,
      dateCreated: user.dateCreated,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
