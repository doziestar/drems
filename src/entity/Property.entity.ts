/**
* @property entity
* @property entityName

 */

import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { LandLord } from './LandLord.entity';
import { Manager } from './Manager.entity';
import { Tenant } from './Tenant.entity';

export enum PropertyType {
  House = 'House',
  Apartment = 'Apartment',
  Condo = 'Condo',
  Townhouse = 'Townhouse',
  Land = 'Land',
  Other = 'Other',
}

export enum PropertyStatus {
  Available = 'Available',
  Sold = 'Sold',
  UnderContract = 'UnderContract',
  UnderConstruction = 'UnderConstruction',
  Other = 'Other',
}

export enum PropertyCondition {
  Excellent = 'Excellent',
  Good = 'Good',
  Fair = 'Fair',
  Poor = 'Poor',
  Other = 'Other',
}

export enum PropertyConditionStatus {
  New = 'New',
  Used = 'Used',
  Other = 'Other',
}

@Entity()
export class PropertyImage extends BaseEntity {
  @Column()
  image: string;

  @ManyToOne(type => Property, property => property.images, { cascade: true })
  @JoinColumn({
    name: 'property_id',
  })
  property: Property;
}

@Entity()
export class Property extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: 'enum', enum: PropertyType, default: PropertyType.House })
  type: PropertyType;

  @Column({ type: 'enum', enum: PropertyStatus, default: PropertyStatus.Available })
  status: PropertyStatus;

  @Column({ type: 'enum', enum: PropertyCondition, default: PropertyCondition.Excellent })
  condition: PropertyCondition;

  @Column({ type: 'enum', enum: PropertyConditionStatus, default: PropertyConditionStatus.New })
  conditionStatus: PropertyConditionStatus;

  @Column({ type: 'enum', enum: PropertyStatus, default: PropertyStatus.Available })
  description: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  country: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToMany(type => PropertyImage, image => image.property, { cascade: true })
  @JoinColumn({ name: 'property_id' })
  images: PropertyImage[];

  @ManyToMany(type => LandLord, landlord => landlord.properties, { cascade: true })
  @JoinTable({ name: 'property_landlord', joinColumn: { name: 'property_id' }, inverseJoinColumn: { name: 'landlord_id' } })
  landlords: LandLord;

  @ManyToMany(type => Tenant, tenant => tenant.properties, { cascade: true })
  @JoinTable({ name: 'property_tenant', joinColumn: { name: 'property_id' }, inverseJoinColumn: { name: 'tenant_id' } })
  tenants: Tenant[];

  @ManyToOne(type => Manager, manager => manager.properties, { cascade: true })
  @JoinColumn({ name: 'manager_id' })
  managers: Manager[];
}
