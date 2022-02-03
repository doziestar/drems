import { User } from '@entity/User';
import { IUser } from '@interfaces/users.interface';
import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class UserProfile extends BaseEntity {
  @Column()
  bio: string;

  @Column()
  @OneToOne(type => User)
  user: IUser;

  @Column()
  address: string;

  @Column()
  avatar: string;

  @Column()
  phoneNumber: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
