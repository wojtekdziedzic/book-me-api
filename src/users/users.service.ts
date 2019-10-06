import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  readonly users: User[];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>) {
    super(usersRepository);
  }

  async getOneUser(name: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {name},
    });
  }

  // async getUser(Id: string): Promise<User[]> {
  //   return await this.usersRepository.find({
  //     select: ['id', 'name', 'password'],
  //     where: [{ id: Id }],
  //   });
  // }
  //
  // async updateUser(user: User) {
  //   await this.usersRepository.save(user);
  // }
  //
  // async deleteUser(user: User) {
  //   await this.usersRepository.delete(user);
  // }
}
