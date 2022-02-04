/**
* @property entity
* @property entityName

 */
import { BaseEntity } from './base.entity';
import { LandLord } from './LandLord.entity';
import { Manager } from './Manager.entity';
import { Tenant } from './Tenant.entity';
export declare enum PropertyType {
    House = "House",
    Apartment = "Apartment",
    Condo = "Condo",
    Townhouse = "Townhouse",
    Land = "Land",
    Other = "Other"
}
export declare enum PropertyStatus {
    Available = "Available",
    Sold = "Sold",
    UnderContract = "UnderContract",
    UnderConstruction = "UnderConstruction",
    Other = "Other"
}
export declare enum PropertyCondition {
    Excellent = "Excellent",
    Good = "Good",
    Fair = "Fair",
    Poor = "Poor",
    Other = "Other"
}
export declare enum PropertyConditionStatus {
    New = "New",
    Used = "Used",
    Other = "Other"
}
export declare class PropertyImage extends BaseEntity {
    image: string;
    property: Property;
}
export declare class Property extends BaseEntity {
    name: string;
    type: PropertyType;
    status: PropertyStatus;
    condition: PropertyCondition;
    conditionStatus: PropertyConditionStatus;
    description: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    latitude: number;
    longitude: number;
    images: PropertyImage[];
    landlords: LandLord;
    tenants: Tenant[];
    managers: Manager[];
}
