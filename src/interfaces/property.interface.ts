// interface for property
import { AddressDocument } from '@interfaces/shared.interface';
import { IProfile } from '@interfaces/users.interface';

export interface Property {
  profile: IProfile[];
  // tenants: IUser;
  // propertyManager: IUser;
}

export interface IProperty extends Property {
  id: string;
  propertyType: string;
  propertyName: string;
  propertyAddress: AddressDocument;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPropertyCreate {
  propertyType: string;
  propertyName: string;
  propertyAddress: AddressDocument;
  // propertyManager?: PropertyManager;
  // landlord?: IUser;
  // tenants: Tenant[];
}

export interface IPropertyFacility {
  property: IProperty;
  // TODO: add facilities
}
