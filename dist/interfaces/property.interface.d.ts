import { AddressDocument } from './shared.interface';
import { IProfile } from './users.interface';
export interface Property {
    profile: IProfile[];
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
