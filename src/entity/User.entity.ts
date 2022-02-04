/**
 * @user entity
 * @description
 * @author Chidozie C. Okafor
 *
 */
import { BaseEntity } from '@entity/Base.entity';
import { IsBoolean, IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import { Column, Entity, OneToOne } from 'typeorm';
import { Profile } from './Profile.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsPhoneNumber()
  phoneNumber: string;

  @Column()
  @IsBoolean()
  isActive: boolean;

  @Column({ nullable: true })
  @IsString()
  firstName: string;

  @Column({ nullable: true })
  @IsString()
  lastName: string;

  @Column()
  @IsString()
  password: string;

  @OneToOne(type => Profile, profile => profile.user)
  profile: Profile;
}
