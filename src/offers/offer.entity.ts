import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column(
    {
      nullable: false,
    })
  title: string;

  @Column(
    {
      nullable: true,
    })
  description: string;

  @Column(
    'text',
    {
      nullable: true,
    })
  content: string;

  @Column(
    'decimal',
    {
      precision: 9,
      scale: 2,
      nullable: true,
    })
  priceShort: number;

  @Column(
    'decimal',
    {
      precision: 9,
      scale: 2,
      nullable: true,
    })
  priceLong: number;

  @Column(
    {
      default: false,
    })
  active: boolean;

  @Column(
    {
      type: 'bigint',
    })
  dateCreated: number;

  @Column(
    {
      type: 'bigint',
      nullable: true,
      default: null,
    })
  dateUpdated: number;

  @Column(
    'varchar',
    {
      nullable: false,
    })
  @ManyToOne(
    () => User,
    user => user.offers,
  )
  user: User;
}
