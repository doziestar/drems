import { PropertyManager } from '@interfaces/managers.interface';
declare class PropertyManagerService {
    getPropertyManagers(): Promise<PropertyManager[]>;
    getPropertyManagerById(propertyManagerId: string): Promise<PropertyManager>;
    createPropertyManager(propertyManagerData: PropertyManager): Promise<PropertyManager>;
    updatePropertyManager(propertyManagerId: string, propertyManagerData: PropertyManager): Promise<PropertyManager>;
    deletePropertyManager(propertyManagerId: string): Promise<PropertyManager>;
    getPropertyManagerByLandlordId(landlordId: string): Promise<PropertyManager>;
    getPropertyManagerByPropertyId(propertyId: string): Promise<PropertyManager>;
}
export default PropertyManagerService;
