import { BaseEntity } from '@entity/Base.entity';
import { Profile } from '@entity/Profile.entity';
import { IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Address extends BaseEntity {
  @Column()
  @IsString()
  street: string;

  @Column()
  @IsString()
  city: string;

  @Column()
  @IsString()
  state: string;

  @Column()
  @IsString()
  zip: string;

  @Column()
  @IsString()
  country: string;

  @ManyToOne(type => Profile, profile => profile.address)
  @JoinColumn({ name: 'profile' })
  profile: Profile[];
}
