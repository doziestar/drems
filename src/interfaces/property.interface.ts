// interface for property
import { EnumType } from 'typescript';
import { General } from './general.interface';
import { Landlord } from './landlord.interface';
import { PropertyManager } from './managers.interface';
import { AddressDocument } from './shared.interface';
import { Tenant } from './tenant.interface';

export interface Property extends General {
  landlord: Landlord;
  tenants: Tenant[];
  propertyManager: PropertyManager;
}


export interface IProperty {
  id: number;
  propertyType: EnumType;
  propertyName: string;
  propertyAddress: AddressDocument;
  propertyManager: PropertyManager;
  landlord: Landlord[];
  tenants: Tenant[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IPropertyCreate {
  propertyType: EnumType;
  propertyName: string;
  propertyAddress: AddressDocument;
  propertyManager?: PropertyManager;
  landlord?: Landlord[];
  // tenants: Tenant[];
}


export interface IPropertyFacility {
  property: IProperty;
  // TODO: add facilities
}
