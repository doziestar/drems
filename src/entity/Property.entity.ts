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

import { Landlord } from '@/interfaces/landlord.interface';
import { PropertyManager } from '@/interfaces/managers.interface';
import { Tenant } from '@/interfaces/tenant.interface';
// import { Landlord } from '@interfaces/landlord.interface';
// import { PropertyManager } from '@interfaces/managers.interface';
import { IProperty } from '@interfaces/property.interface';
// import { Tenant } from '@interfaces/tenant.interface';
import { IsDate, IsString } from 'class-validator';
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EnumType } from 'typescript';
import { Address } from './Shared.entity';

@Entity()
export class Property extends BaseEntity implements IProperty {
  landlord: Landlord[];
  tenants: Tenant[];
  propertyManager: PropertyManager;
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: number;

  @Column({ type: 'enum', enum: ['HOUSE', 'APARTMENT', 'OFFICE', 'SHOP', 'STORE', 'WAREHOUSE', 'OTHER'] })
  @IsString()
  propertyType: EnumType;

  @Column()
  @IsString()
  propertyName: string;

  @JoinColumn()
  @OneToMany(type => Address, address => address.property)
  propertyAddress: Address[];

  // @Column()
  // @IsString()
  // propertyManager: PropertyManager;

  // @Column()
  // @IsArray()
  // landlord: Landlord[];

  // @Column()
  // @IsArray()
  // tenants: Tenant[];

  // @Column()
  // @ManyToMany(type => Profile, profile => profile.properties)
  // @IsArray()
  // profiles: Profile[];

  @Column()
  @IsDate()
  createdAt: Date;

  @Column()
  @IsDate()
  updatedAt: Date;
}
