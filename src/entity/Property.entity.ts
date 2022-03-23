/**
 * @Property entity
 * @description Property entity
 * @author Chidozie C. Okafor
 * @version 1.0
 * @since 2022-02-01
 * @export
 * @class Property
 * @extends {BaseEntity}
 * @implements {Entity}
 * @implements {IProperty}
 */

import { Address } from '@entity/Shared.entity';
import { User } from '@entity/User.entity';
import { IProperty } from '@interfaces/property.interface';
import { IsDate, IsString } from 'class-validator';
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './Profile.entity';

@Entity()
export class Property extends BaseEntity implements IProperty {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column({ type: 'enum', enum: ['APARTMENT', 'OFFICE', 'SHOP', 'STORE', 'WAREHOUSE', 'OTHER'], default: 'APARTMENT' })
  @IsString()
  propertyType: string;

  @Column()
  @IsString()
  propertyName: string;

  @OneToMany(() => Address, address => address.property)
  propertyAddress: Address;

  @ManyToMany(() => Profile, user => user.properties)
  @JoinTable()
  profile: Profile[];

  @Column()
  @IsDate()
  createdAt: Date;

  @Column()
  @IsDate()
  updatedAt: Date;
}
