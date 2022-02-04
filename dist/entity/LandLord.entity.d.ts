/**
  @LandLord.entity.ts
  @have to import { BaseEntity } from './base.entity';
  @ have tenants
  @ have properties
  @ have leases
  @ have bills
  @ have payments
  @ have invoices
  @ have receipts
  @ have notes
  @ have documents
  @ have messages
  @ have notifications
  @ have tasks
  @ have events
  @ have contacts
  @ have managers
 */
import { BaseEntity } from './base.entity';
import { Bill, Document, Invoice, Lease, Payment, Receipt } from './Bill.entity';
import { Manager } from './Manager.entity';
import { Contact, Event, Message, Note, Notification, Task } from './Message.entity';
import { Property } from './Property.entity';
import { Tenant } from './Tenant.entity';
export declare class LandLord extends BaseEntity {
    properties: Property[];
    leases: Lease[];
    bills: Bill[];
    payments: Payment[];
    invoices: Invoice[];
    receipts: Receipt[];
    notes: Note[];
    documents: Document[];
    messages: Message[];
    notifications: Notification[];
    tasks: Task[];
    events: Event[];
    contacts: Contact[];
    managers: Manager[];
    tenants: Tenant[];
}
