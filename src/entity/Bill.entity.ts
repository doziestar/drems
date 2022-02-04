/**
@Bill entity
@Lease entity
@Document entity
@Invoice entity
@Payment entity
@Receipt entity
 */
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { LandLord } from './LandLord.entity';
import { Manager } from './Manager.entity';
import { Tenant } from './Tenant.entity';

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
}

@Entity()
export class Bill extends BaseEntity {
  @Column({ type: 'enum', enum: Status, default: Status.Active })
  status: Status;

  @ManyToOne(type => LandLord, landlord => landlord.bills, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToMany(type => Tenant, tenant => tenant.bills, { cascade: true })
  @JoinTable({ name: 'bill_tenant', joinColumn: { name: 'bill_id' }, inverseJoinColumn: { name: 'tenant_id' } })
  tenant: Tenant[];

  @ManyToMany(type => Manager, manager => manager.bills, { cascade: true })
  @JoinTable({ name: 'bill_manager', joinColumn: { name: 'bill_id' }, inverseJoinColumn: { name: 'manager_id' } })
  manager: Manager[];
}

@Entity()
export class Lease extends BaseEntity {
  @Column({ type: 'enum', enum: Status, default: Status.Active })
  status: Status;

  @ManyToOne(type => LandLord, landlord => landlord.leases, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToMany(type => Tenant, tenant => tenant.leases, { cascade: true })
  @JoinTable({ name: 'lease_tenant', joinColumn: { name: 'lease_id' }, inverseJoinColumn: { name: 'tenant_id' } })
  tenant: Tenant[];

  @ManyToMany(type => Manager, manager => manager.leases, { cascade: true })
  @JoinTable({ name: 'lease_manager', joinColumn: { name: 'lease_id' }, inverseJoinColumn: { name: 'manager_id' } })
  manager: Manager[];
}

@Entity()
export class Document extends BaseEntity {
  @Column({ type: 'enum', enum: Status, default: Status.Active })
  status: Status;

  @ManyToOne(type => LandLord, landlord => landlord.documents, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToMany(type => Tenant, tenant => tenant.documents, { cascade: true })
  @JoinTable({ name: 'document_tenant', joinColumn: { name: 'document_id' }, inverseJoinColumn: { name: 'tenant_id' } })
  tenant: Tenant[];

  @ManyToMany(type => Manager, manager => manager.documents, { cascade: true })
  @JoinTable({ name: 'document_manager', joinColumn: { name: 'document_id' }, inverseJoinColumn: { name: 'manager_id' } })
  manager: Manager[];
}

@Entity()
export class Invoice extends BaseEntity {
  @Column({ type: 'enum', enum: Status, default: Status.Active })
  status: Status;

  @ManyToOne(type => LandLord, landlord => landlord.invoices, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToMany(type => Tenant, tenant => tenant.invoices, { cascade: true })
  @JoinTable({ name: 'invoice_tenant', joinColumn: { name: 'invoice_id' }, inverseJoinColumn: { name: 'tenant_id' } })
  tenant: Tenant[];

  @ManyToMany(type => Manager, manager => manager.invoices, { cascade: true })
  @JoinTable({ name: 'invoice_manager', joinColumn: { name: 'invoice_id' }, inverseJoinColumn: { name: 'manager_id' } })
  manager: Manager[];
}

@Entity()
export class Payment extends BaseEntity {
  @Column({ type: 'enum', enum: Status, default: Status.Active })
  status: Status;

  @ManyToOne(type => LandLord, landlord => landlord.payments, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToMany(type => Tenant, tenant => tenant.payments, { cascade: true })
  @JoinTable({ name: 'payment_tenant', joinColumn: { name: 'payment_id' }, inverseJoinColumn: { name: 'tenant_id' } })
  tenant: Tenant[];

  @ManyToMany(type => Manager, manager => manager.payments, { cascade: true })
  @JoinTable({ name: 'payment_manager', joinColumn: { name: 'payment_id' }, inverseJoinColumn: { name: 'manager_id' } })
  manager: Manager[];
}

@Entity()
export class Receipt extends BaseEntity {
  @Column({ type: 'enum', enum: Status, default: Status.Active })
  status: Status;

  @ManyToOne(type => LandLord, landlord => landlord.receipts, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToMany(type => Tenant, tenant => tenant.receipts, { cascade: true })
  @JoinTable({ name: 'receipt_tenant', joinColumn: { name: 'receipt_id' }, inverseJoinColumn: { name: 'tenant_id' } })
  tenant: Tenant[];

  @ManyToMany(type => Manager, manager => manager.receipts, { cascade: true })
  @JoinTable({ name: 'receipt_manager', joinColumn: { name: 'receipt_id' }, inverseJoinColumn: { name: 'manager_id' } })
  manager: Manager[];
}
