import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Offer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

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
}
