import { AddressDocument } from '../interfaces/shared.interface';
import { IUser } from '../interfaces/users.interface';
export declare class CreatePropertyDto {
    propertyName: string;
    propertyType: string;
    propertyAddress: AddressDocument;
    tenants: IUser[];
    landlord: IUser[];
    propertyManager: IUser;
    createdAt: Date;
    updatedAt: Date;
}
