import {
  Entity, PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { User } from './User';
import { Personaje } from './Personaje';


@Entity()
export class FavPersonaje extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.favPersonajes)
  user: User;

  @ManyToOne(() => Personaje, personaje => personaje.favPersonajes)
  personaje: Personaje;

}