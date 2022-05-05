/**
 * @user entity
 * @description
 * @author Chidozie C. Okafor
 *
 */
import { IProperty } from '@/interfaces/property.interface';
import { BaseEntity } from '@entity/Base.entity';
import { Profile } from '@entity/Profile.entity';
import { IProfile, IUser } from '@interfaces/users.interface';
import bcrypt from 'bcrypt';
import { IsBoolean, IsEmail, IsPhoneNumber, IsString } from 'class-validator';
import jwt from 'jsonwebtoken';
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class User extends BaseEntity implements IUser {
  profile: IProfile;
  property: IProperty[];
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

  @Column({ type: 'enum', enum: ['landlord', 'tenant', 'manager'], default: 'tenant' })
  @IsString()
  role: string;

  @IsBoolean()
  @Column({ default: false })
  isVerified: boolean;

  @OneToOne(() => Profile, profile => profile.user)
  @JoinColumn({ name: 'profile' })
  properties: Profile;

  // hash password before inserting into database
  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  // create profile for user on signup
  @BeforeInsert()
  async createProfile(): Promise<void> {
    const profile = await new Profile();
    profile.user = this;
    // this.profile = profile;
  }

  // generate token for user
  async generateToken(): Promise<string> {
    const token = await jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
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

  async validatePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}
