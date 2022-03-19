import { CreatePropertyDto } from '../dtos/property.dto';
import { IProperty } from '../interfaces/property.interface';
import { AddressDocument } from '../interfaces/shared.interface';
import { IUser } from '../interfaces/users.interface';
import { Repository } from 'typeorm';
export declare class PropertyRepository {
    propertyRepository: Repository<IProperty>;
    create(property: CreatePropertyDto): Promise<IProperty>;
    findById(id: string): Promise<IProperty>;
    findByAddress(address: AddressDocument): Promise<IProperty[]>;
    findByManager(manager: IUser): Promise<IProperty[]>;
    findByLandlord(landlord: IUser): Promise<IProperty[]>;
    findByTenant(tenant: IUser): Promise<IProperty[]>;
    update(property: IProperty, id: string): Promise<IProperty>;
    delete(id: string): Promise<void>;
}
