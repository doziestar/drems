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
import { Landlord } from '../interfaces/landlord.interface';
import { PropertyManager } from '../interfaces/managers.interface';
import { Tenant } from '../interfaces/tenant.interface';
import { IProperty } from '../interfaces/property.interface';
import { BaseEntity } from 'typeorm';
import { EnumType } from 'typescript';
import { Address } from './Shared.entity';
export declare class Property extends BaseEntity implements IProperty {
    landlord: Landlord[];
    tenants: Tenant[];
    propertyManager: PropertyManager;
    id: number;
    propertyType: EnumType;
    propertyName: string;
    propertyAddress: Address[];
    createdAt: Date;
    updatedAt: Date;
}
