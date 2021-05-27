import {
  Entity, Column, PrimaryGeneratedColumn, 
  BaseEntity,
  OneToMany
} from 'typeorm';
import { FavPersonaje } from './FavPersonaje';

@Entity()
export class Personaje extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  año_nacimiento: string;

  @Column()
  genero: string;

  @Column()
  color_cabello: string;

  @OneToMany(() => FavPersonaje, favPersonaje => favPersonaje.personaje)
  favPersonajes: FavPersonaje[];

    
}