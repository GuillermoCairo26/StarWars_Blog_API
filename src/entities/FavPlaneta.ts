import {
  Entity, PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { User } from './User';
import { Planeta } from './Planeta';

@Entity()
export class FavPlaneta extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.favPlanetas)
  user: User;

  @ManyToOne(() => Planeta, planeta => planeta.favPlanetas)
  planeta: Planeta;

}