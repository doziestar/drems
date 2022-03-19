import { AddressDocument } from './shared.interface';
import { IUser } from './users.interface';
export interface Property {
    user: IUser;
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
}
export interface IPropertyFacility {
    property: IProperty;
}
