/**
* @Tenant Entity
tenant can be a landlord, tenant, or manager
tenant can be managed by a manager (manager can manage multiple tenants) or by a landlord (landlord can manage only one tenant)
 */
import { Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Bill, Invoice, Payment, Receipt } from './Bill.entity';
import { Contact } from './Contact.entity';
import { Document } from './Document.entity';
import { Event } from './Event.entity';
import { Lease } from './Lease.entity';
import { Manager } from './Manager.entity';
import { Message, Note, Notification, Task } from './Message.entity';
import { Property } from './Property.entity';
import { User } from './User';

@Entity()
export class Tenant extends BaseEntity {
  @ManyToOne(type => User, user => user.tenants, { cascade: true })
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @ManyToMany(type => Property, property => property.tenants, { cascade: true })
  properties: Property[];

  @OneToMany(type => Lease, lease => lease.tenant, { cascade: true })
  leases: Lease[];

  @OneToMany(type => Bill, bill => bill.tenant, { cascade: true })
  bills: Bill[];

  @OneToMany(type => Payment, payment => payment.tenant, { cascade: true })
  payments: Payment[];

  @OneToMany(type => Invoice, invoice => invoice.tenant, { cascade: true })
  invoices: Invoice[];

  @OneToMany(type => Receipt, receipt => receipt.tenant, { cascade: true })
  receipts: Receipt[];

  @OneToMany(type => Note, note => note.tenant, { cascade: true })
  notes: Note[];

  @OneToMany(type => Document, document => document.tenant, { cascade: true })
  documents: Document[];

  @OneToMany(type => Message, message => message.tenant, { cascade: true })
  messages: Message[];

  @OneToMany(type => Notification, notification => notification.tenant, { cascade: true })
  notifications: Notification[];

  @OneToMany(type => Task, task => task.tenant, { cascade: true })
  tasks: Task[];

  @OneToMany(type => Event, event => event.tenant, { cascade: true })
  events: Event[];

  @OneToMany(type => Contact, contact => contact.tenant, { cascade: true })
  contacts: Contact[];

  @ManyToOne(type => Manager, manager => manager.tenants, { cascade: true })
  manager: Manager;
}
