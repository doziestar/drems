import { BaseEntity } from './base.entity';
import { Bill, Document, Invoice, Lease, Payment, Receipt } from './Bill.entity';
import { LandLord } from './Landlord.entity';
import { Manager } from './Manager.entity';
import { Contact, Event, Message, Note, Notification, Task } from './Message.entity';
import { Property } from './Property.entity';
export declare class Tenant extends BaseEntity {
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
    manager: Manager[];
    landlords: LandLord[];
}
