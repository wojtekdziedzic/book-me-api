import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Offer {

  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public price: number;
}
