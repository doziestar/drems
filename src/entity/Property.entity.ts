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

import { IUser } from '@/interfaces/users.interface';
import { Address } from '@entity/Shared.entity';
import { User } from '@entity/User.entity';
import { IProperty } from '@interfaces/property.interface';
import { IsArray, IsDate, IsString } from 'class-validator';
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @JoinColumn()
  @OneToMany(type => Address, address => address.property)
  propertyAddress: Address[];

  @Column()
  @IsString()
  propertyManager: User;

  @Column()
  @IsArray()
  landlord: User[];

  @Column()
  @IsArray()
  tenants: IUser[];

  @Column()
  @IsDate()
  createdAt: Date;

  @Column()
  @IsDate()
  updatedAt: Date;
}
