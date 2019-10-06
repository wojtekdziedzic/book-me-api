import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Offer } from '../offers/offer.entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {

  saltRounds = 10;

  async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column(
    {
      nullable: false,
      default: '',
    })
  name: string;

  @Column(
    {
      nullable: false,
    })
  password: string;

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

  @OneToMany(
    () => Offer,
    offer => offer.user,
  )
  offers: Offer[];

  @BeforeInsert()
  async updateDateCreated() {
    this.dateCreated = new Date().getTime();
    await this.getHash(this.password).then(
      hash => this.password = hash,
    );

  }
}
