import { CreatePropertyDto } from '../dtos/property.dto';
import { Property } from '../entity/Property.entity';
import { IProperty } from '../interfaces/property.interface';
import { AddressDocument } from '../interfaces/shared.interface';
export declare class PropertyRepository {
    create(property: CreatePropertyDto): Promise<IProperty>;
    findById(id: string): Promise<Property>;
    findByAddress(address: AddressDocument): Promise<IProperty[]>;
    delete(id: string): Promise<void>;
}
