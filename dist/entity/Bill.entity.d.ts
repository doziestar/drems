import { BaseEntity } from './base.entity';
import { LandLord } from './LandLord.entity';
import { Manager } from './Manager.entity';
import { Tenant } from './Tenant.entity';
export declare enum Status {
    Active = "Active",
    Inactive = "Inactive"
}
export declare class Bill extends BaseEntity {
    status: Status;
    landlord: LandLord;
    tenant: Tenant[];
    manager: Manager[];
}
export declare class Lease extends BaseEntity {
    status: Status;
    landlord: LandLord;
    tenant: Tenant[];
    manager: Manager[];
}
export declare class Document extends BaseEntity {
    status: Status;
    landlord: LandLord;
    tenant: Tenant[];
    manager: Manager[];
}
export declare class Invoice extends BaseEntity {
    status: Status;
    landlord: LandLord;
    tenant: Tenant[];
    manager: Manager[];
}
export declare class Payment extends BaseEntity {
    status: Status;
    landlord: LandLord;
    tenant: Tenant[];
    manager: Manager[];
}
export declare class Receipt extends BaseEntity {
    status: Status;
    landlord: LandLord;
    tenant: Tenant[];
    manager: Manager[];
}
