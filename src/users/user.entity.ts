import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  getRepository,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Offer } from '../offers/offer.entity';
import { UsersService } from './users.service';
import { hashSync } from 'bcrypt';
import { log } from 'util';
import { createHmac } from 'crypto';

@Entity()
export class User {
  constructor(private authService: UsersService) {}

  generateSalt(newPass: string, oldPass?: string) {
    console.log('sdfsdg');
    if (newPass && (!oldPass || oldPass !== newPass || 1)) {
      // this.salt = genSaltSync(8);
      // tslint:disable-next-line:no-console
      console.log('ssss');
      return (this.password = hashSync(newPass, 10));
    }
  }

  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  surname: string;

  @Column({
    nullable: true,
    default: null,
  })
  age: number;

  @Column({
    nullable: true,
    default: null,
  })
  role: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  // @Column({
  //   nullable: false,
  //   default: '',
  // })
  // password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      // this.password = createHmac('sha256', this.password).digest('hex');
      this.password = this.generateSalt(this.password);
    }
  }

  @Column({
    default: true,
  })
  status: boolean;

  @UpdateDateColumn()
  updated: Date;

  @CreateDateColumn()
  created: Date;

  @OneToMany(() => Offer, offer => offer.user)
  offers: Offer[];
}
