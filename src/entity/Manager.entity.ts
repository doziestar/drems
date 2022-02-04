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

import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Bill, Document, Invoice, Lease, Payment, Receipt } from './Bill.entity';
import { LandLord } from './LandLord.entity';
import { Property } from './Property.entity';
import { Tenant } from './Tenant.entity';

export enum ManagerLevel {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

@Entity()
export class Manager extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: 'enum', enum: ManagerLevel, default: ManagerLevel.Medium })
  level: ManagerLevel;

  @ManyToOne(type => LandLord, landlord => landlord.managers, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToMany(type => Property, property => property.managers, { cascade: true })
  @JoinTable({ name: 'manager_property', joinColumn: { name: 'manager_id' }, inverseJoinColumn: { name: 'property_id' } })
  properties: Property[];

  @OneToMany(type => Tenant, tenant => tenant.manager, { cascade: true })
  tenants: Tenant[];

  @OneToMany(type => Bill, bill => bill.manager, { cascade: true })
  bills: Bill[];

  @OneToMany(type => Payment, payment => payment.manager, { cascade: true })
  payments: Payment[];

  @OneToMany(type => Invoice, invoice => invoice.manager, { cascade: true })
  invoices: Invoice[];

  @OneToMany(type => Lease, lease => lease.manager, { cascade: true })
  leases: Lease[];

  @OneToMany(type => Document, document => document.manager, { cascade: true })
  documents: Document[];

  @OneToMany(type => Receipt, receipt => receipt.manager, { cascade: true })
  receipts: Receipt[];
}
