import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column('text', {
    nullable: true,
  })
  content: string;

  @Column('decimal', {
    precision: 9,
    scale: 2,
    nullable: true,
  })
  priceShort: number;

  @Column('decimal', {
    precision: 9,
    scale: 2,
    nullable: true,
  })
  priceLong: number;

  @Column({
    default: false,
  })
  active: boolean;

  @Column({
    type: 'bigint',
  })
  dateCreated: number;

  @Column({
    type: 'bigint',
    nullable: true,
    default: null,
  })
  dateUpdated: number;

  @Column('varchar', {
    nullable: false,
    default: '06d3cfcc-cd3f-4213-8062-74093ce03a97',
  })
  @ManyToOne(() => User, user => user.offers)
  user: User;

  @BeforeInsert()
  updateDateCreated() {
    this.dateCreated = new Date().getTime();
  }

  @BeforeUpdate()
  updateDateUpdated() {
    this.dateUpdated = new Date().getTime();
  }
}
