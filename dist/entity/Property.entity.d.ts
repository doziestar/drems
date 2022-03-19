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
import { Address } from './Shared.entity';
import { User } from './User.entity';
import { IProperty } from '../interfaces/property.interface';
import { BaseEntity } from 'typeorm';
export declare class Property extends BaseEntity implements IProperty {
    id: string;
    propertyType: string;
    propertyName: string;
    propertyAddress: Address;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
