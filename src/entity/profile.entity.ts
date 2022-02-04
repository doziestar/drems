import { IsPhoneNumber } from 'class-validator';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../entity/User';
import { BaseEntity } from './base.entity';

@Entity()
export class UserProfile extends BaseEntity {
  @Column()
  bio: string;

  @OneToOne(type => User, user => user.profile, { cascade: true })
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @Column()
  address: string;

  @Column()
  avatar: string;

  @Column()
  @IsPhoneNumber()
  phoneNumber: string;
}
