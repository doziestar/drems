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
import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  propertyAddress: Address;

  @ManyToMany(type => User, user => user.property)
  @JoinColumn({ name: 'user' })
  user: User;

  @Column()
  @IsDate()
  createdAt: Date;

  @Column()
  @IsDate()
  updatedAt: Date;
}
