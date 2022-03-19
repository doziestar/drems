/// <reference types="mongoose" />
import { Tenant } from '../../interfaces/tenant.interface';
declare class TenantService {
    tenants: import("mongoose").Model<Tenant & import("mongoose").Document<any, any, any>, {}, {}, {}>;
    getTenants: () => Promise<Tenant[]>;
    getTenantById: (id: number) => Promise<Tenant>;
    createTenant: (tenant: Tenant) => Promise<Tenant>;
    updateTenant: (id: number, tenant: Tenant) => Promise<Tenant>;
    deleteTenant: (id: number) => Promise<Tenant>;
    getTenantsByLandlordId: (landlordId: number) => Promise<Tenant[]>;
    getTenantsByPropertyManagerId: (propertyManagerId: number) => Promise<Tenant[]>;
    getTenantsByPropertyId: (propertyId: number) => Promise<Tenant[]>;
    getTenantsByRent: (rent: number) => Promise<Tenant[]>;
    getTenantsByStartDate: (startDate: Date) => Promise<Tenant[]>;
    getTenantsByEndDate: (endDate: Date) => Promise<Tenant[]>;
    getTenantsByIsActive: (isActive: boolean) => Promise<Tenant[]>;
    getTenantsByLandlordIdAndPropertyManagerId: (landlordId: number, propertyManagerId: number) => Promise<Tenant[]>;
    getTenantsByLandlordIdAndPropertyId: (landlordId: number, propertyId: number) => Promise<Tenant[]>;
    getTenantsByLandlordIdAndRent: (landlordId: number, rent: number) => Promise<Tenant[]>;
    getTenantsByLandlordIdAndStartDate: (landlordId: number, startDate: Date) => Promise<Tenant[]>;
    landlordCreateTenant: (landlordId: number, tenant: Tenant) => Promise<Tenant>;
    propertyManagerCreateTenant: (propertyManagerId: number, tenant: Tenant) => Promise<Tenant>;
}
export default TenantService;
