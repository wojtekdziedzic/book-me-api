import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
