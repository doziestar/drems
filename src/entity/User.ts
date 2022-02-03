import { UserProfile } from '@entity/User';
import { IUserProfile } from '@interfaces/users.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  avatar: string;

  @Column()
  phoneNumber: string;

  @Column()
  @OneToOne(type => UserProfile)
  profile: IUserProfile;

  @Column()
  password: string;

  // hash password before saving using bcrypt
  // salt: string;
  public async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  // compare password with hash
  public async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }

  // generate token
  public generateToken(): string {
    const token = jwt.sign(
      {
        id: this.id,
        name: this.name,
        email: this.email,
        avatar: this.avatar,
        phoneNumber: this.phoneNumber,
      },
      process.env.JWT_SECRET,
    );
    return token;
  }

  // add profile to user after user is created
  public async addProfile() {
    this.profile = new UserProfile();
    this.profile.user = this;
  }
}
