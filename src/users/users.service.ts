import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  // readonly users: User[];
  private saltRounds = 10;

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    super(usersRepository);
  }

  async getUser(name: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { name },
    });
  }

  public async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(
    password: string | undefined,
    hash: string | undefined,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  // async getUser(Id: string): Promise<User[]> {
  //   return await this.usersRepository.find({
  //     select: ['id', 'name', 'password'],
  //     where: [{ id: Id }],
  //   });
  // }
  //
  public async updateUser(user: User) {
    await this.usersRepository.save(user);
  }
  //
  // async deleteUser(user: User) {
  //   await this.usersRepository.delete(user);
  // }
}
