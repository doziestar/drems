/**
* @Tenant Entity
tenant can be a landlord, tenant, or manager
tenant can be managed by a manager (manager can manage multiple tenants) or by a landlord (landlord can manage only one tenant)
 */
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Bill, Document, Invoice, Lease, Payment, Receipt } from './Bill.entity';
import { LandLord } from './Landlord.entity';
import { Manager } from './Manager.entity';
import { Contact, Event, Message, Note, Notification, Task } from './Message.entity';
import { Property } from './Property.entity';

@Entity()
export class Tenant extends BaseEntity {
  // @ManyToOne(type => User, user => user.tenants, { cascade: true })
  // @JoinColumn({
  //   name: 'user_id',
  // })
  // user: User;

  @ManyToMany(type => Property, property => property.tenants, { cascade: true })
  @JoinTable({ name: 'tenant_property', joinColumn: { name: 'tenant_id' }, inverseJoinColumn: { name: 'property_id' } })
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
  @JoinColumn({ name: 'tenant_id' })
  notifications: Notification[];

  @OneToMany(type => Task, task => task.tenant, { cascade: true })
  @JoinColumn({ name: 'tenant_id' })
  tasks: Task[];

  @OneToMany(type => Event, event => event.tenant, { cascade: true })
  @JoinColumn({ name: 'tenant_id' })
  events: Event[];

  @OneToMany(type => Contact, contact => contact.tenant, { cascade: true })
  @JoinColumn({ name: 'tenant_id' })
  contacts: Contact[];

  @ManyToMany(type => Manager, manager => manager.tenants, { cascade: true })
  @JoinTable({ name: 'tenant_manager', joinColumn: { name: 'tenant_id' }, inverseJoinColumn: { name: 'manager_id' } })
  manager: Manager[];

  @ManyToMany(type => LandLord, landlord => landlord.tenants, { cascade: true })
  @JoinTable({ name: 'tenant_landlord', joinColumn: { name: 'tenant_id' }, inverseJoinColumn: { name: 'landlord_id' } })
  landlords: LandLord[];
}
