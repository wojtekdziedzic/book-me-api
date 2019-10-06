import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Offer } from '../offers/offer.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column(
    {
      nullable: false,
    })
  name: string;

  @Column(
    {
      nullable: false,
    })
  password: string;

  @OneToMany(
    () => Offer,
    offer => offer.user,
  )
  offers: Offer[];
}
