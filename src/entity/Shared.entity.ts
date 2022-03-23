import { AddressDocument } from '@/interfaces/shared.interface';
import { BaseEntity } from '@entity/Base.entity';
import { Profile } from '@entity/Profile.entity';
import { IsString } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Property } from './Property.entity';

@Entity()
export class Address extends BaseEntity implements AddressDocument {
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

  @ManyToOne(() => Property, property => property.propertyAddress)
  property: Address[];

  @ManyToOne(() => Profile, profile => profile.address)
  profile: Profile[];
}
