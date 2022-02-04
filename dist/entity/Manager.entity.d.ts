/**
@ Manager can create property
@ Manager can update property
@ Manager can delete property
@ Manager can create lease
@ Manager can update lease
@ Manager can delete lease
@ manage tenants (tenant can be managed by a manager or by a landlord)
@ manage bills (bill can be managed by a manager or by a landlord)
@ manage payments (payment can be managed by a manager or by a landlord)
@ manage invoices (invoice can be managed by a manager or by a landlord)
@ manage landlord (landlord can be managed by a manager or by a landlord)
 */
import { BaseEntity } from './base.entity';
import { Bill, Document, Invoice, Lease, Payment, Receipt } from './Bill.entity';
import { LandLord } from './LandLord.entity';
import { Property } from './Property.entity';
import { Tenant } from './Tenant.entity';
export declare enum ManagerLevel {
    High = "High",
    Medium = "Medium",
    Low = "Low"
}
export declare class Manager extends BaseEntity {
    name: string;
    level: ManagerLevel;
    landlord: LandLord;
    properties: Property[];
    tenants: Tenant[];
    bills: Bill[];
    payments: Payment[];
    invoices: Invoice[];
    leases: Lease[];
    documents: Document[];
    receipts: Receipt[];
}
