import { AfterUpdate, BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Offer } from '../offers/offer.entity';
import { AuthService} from '../auth/auth.service';

@Entity()
export class User {

  constructor(private readonly authService: AuthService){

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

  @AfterUpdate()
  async afterUpdate() {
    console.log(this);
  }

  @BeforeUpdate()
  async beforeUpdate() {
    this.dateUpdated = new Date().getTime();
    await this.authService.getHash(this.password).then(
      hash => this.password = hash,
    );
  }

  @BeforeInsert()
  async beforeInsert() {
    this.dateCreated = new Date().getTime();
    await this.authService.getHash(this.password).then(
      hash => this.password = hash,
    );
  }

}
