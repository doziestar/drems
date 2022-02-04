/**
@Message entity
@Notification entity
@Task entity
@Note entity
@Event entity
@Contact entity
 */
import { BaseEntity } from './base.entity';
import { LandLord } from './LandLord.entity';
import { Tenant } from './Tenant.entity';
export declare class Message extends BaseEntity {
    message: string;
    landlord: LandLord;
    tenant: Tenant;
}
export declare class Notification extends BaseEntity {
    notification: string;
    landlord: LandLord;
    tenant: Tenant;
}
export declare class Task extends BaseEntity {
    task: string;
    landlord: LandLord;
    tenant: Tenant;
}
export declare class Note extends BaseEntity {
    note: string;
    landlord: LandLord;
    tenant: Tenant;
}
export declare class Event extends BaseEntity {
    event: string;
    landlord: LandLord;
    tenant: Tenant;
}
export declare class Contact extends BaseEntity {
    contact: string;
    landlord: LandLord;
    tenant: Tenant;
}
