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


import { Profile } from '@entity/Profile.entity';
import { Landlord } from '@interfaces/landlord.interface';
import { PropertyManager } from '@interfaces/managers.interface';
import { IProperty } from '@interfaces/property.interface';
import { AddressDocument } from '@interfaces/shared.interface';
import { Tenant } from '@interfaces/tenant.interface';
import { IsArray, IsDate, IsString } from 'class-validator';
import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EnumType } from 'typescript';

@Entity()
export class Property extends BaseEntity implements IProperty {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: number;

  @Column({ type: 'enum', enum: ['HOUSE', 'APARTMENT', 'OFFICE', 'SHOP', 'STORE', 'WAREHOUSE', 'OTHER'] })
  @IsString()
  propertyType: EnumType;

  @Column()
  @IsString()
  propertyName: string;

  @Column()
  @IsString()
  propertyAddress: AddressDocument;

  @Column()
  @IsString()
  propertyManager: PropertyManager;

  @Column()
  @IsArray()
  landlord: Landlord[];

  @Column()
  @IsArray()
  tenants: Tenant[];

  @Column()
  @ManyToMany(type => Profile, profile => profile.properties)
  @IsArray()
  profiles: Profile[];

  @Column()
  @IsDate()
  createdAt: Date;

  @Column()
  @IsDate()
  updatedAt: Date;
}
