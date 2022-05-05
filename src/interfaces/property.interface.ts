// interface for property
import { AddressDocument } from '@interfaces/shared.interface';
import { IUser } from '@interfaces/users.interface';

export interface Property {
  // ten: IProfile[];
  tenants: IUser[];
  // propertyManager: IUser;
}

export interface IProperty extends Property {
  id: string;
  propertyType: string;
  propertyName: string;
  propertyAddress: AddressDocument;
  createdAt: Date;
  updatedAt: Date;
  propertyManager: IUser;
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
