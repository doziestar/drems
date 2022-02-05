/**
 * @user entity
 * @description
 * @author Chidozie C. Okafor
 *
 */
import { BaseEntity } from '@entity/Base.entity';
import { Profile } from '@entity/Profile.entity';
import { IUser } from '@interfaces/users.interface';
import bcrypt from 'bcrypt';
import { IsBoolean, IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import jwt from 'jsonwebtoken';
import { BeforeInsert, Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @IsString()
  userName: string;

  @Column({ nullable: true, unique: true })
  @IsPhoneNumber()
  phoneNumber: string;

  @Column({ default: false })
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

  // @OneToOne(type => Profile)
  // @JoinColumn({ name: 'profile' })
  // profile: Profile;

  // hash password before inserting into database
  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  // create profile for user on signup
  @BeforeInsert()
  async createProfile() {
    const profile = new Profile();
    profile.user = this;
    // this.profile = profile;
  }

  // generate token for user
  async generateToken() {
    const token = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
  }

  // compare password
  async comparePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }

  // get full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // get  profile
  // get profileId() {
  //   return this.profile;
  // }
}
