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

import { Entity, JoinColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Bill, Document, Invoice, Lease, Payment, Receipt } from './Bill.entity';
import { Manager } from './Manager.entity';
import { Contact, Event, Message, Note, Notification, Task } from './Message.entity';
import { Property } from './Property.entity';
import { Tenant } from './Tenant.entity';

@Entity()
export class LandLord extends BaseEntity {
  // @ManyToOne(type => User, user => user.landlords, { cascade: true })
  // @JoinColumn({
  //   name: 'user_id',
  // })
  // user: User;

  @ManyToMany(type => Property, property => property.landlords, { cascade: true })
  @JoinTable({ name: 'landlord_property', joinColumn: { name: 'landlord_id' }, inverseJoinColumn: { name: 'property_id' } })
  properties: Property[];

  @OneToMany(type => Lease, lease => lease.landlord, { cascade: true })
  leases: Lease[];

  @OneToMany(type => Bill, bill => bill.landlord, { cascade: true })
  bills: Bill[];

  @OneToMany(type => Payment, payment => payment.landlord, { cascade: true })
  payments: Payment[];

  @OneToMany(type => Invoice, invoice => invoice.landlord, { cascade: true })
  invoices: Invoice[];

  @OneToMany(type => Receipt, receipt => receipt.landlord, { cascade: true })
  receipts: Receipt[];

  @OneToMany(type => Note, note => note.landlord, { cascade: true })
  notes: Note[];

  @OneToMany(type => Document, document => document.landlord, { cascade: true })
  documents: Document[];

  @OneToMany(type => Message, message => message.landlord, { cascade: true })
  messages: Message[];

  @OneToMany(type => Notification, notification => notification.landlord, { cascade: true })
  @JoinColumn({ name: 'landlord_id' })
  notifications: Notification[];

  @OneToMany(type => Task, task => task.landlord, { cascade: true })
  @JoinColumn({ name: 'landlord_id' })
  tasks: Task[];

  @OneToMany(type => Event, event => event.landlord, { cascade: true })
  @JoinColumn({ name: 'landlord_id' })
  events: Event[];

  @OneToMany(type => Contact, contact => contact.landlord, { cascade: true })
  @JoinColumn({ name: 'landlord_id' })
  contacts: Contact[];

  @OneToMany(type => Manager, manager => manager.landlord, { cascade: true })
  @JoinColumn({ name: 'landlord_id' })
  managers: Manager[];

  @OneToMany(type => Tenant, tenant => tenant.landlords, { cascade: true })
  @JoinColumn({ name: 'landlord_id' })
  tenants: Tenant[];
}
