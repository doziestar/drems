/**
@Message entity
@Notification entity
@Task entity
@Note entity
@Event entity
@Contact entity
 */

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { LandLord } from './LandLord.entity';
import { Tenant } from './Tenant.entity';

@Entity()
export class Message extends BaseEntity {
  @Column()
  message: string;

  @ManyToOne(type => LandLord, landlord => landlord.messages, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToOne(type => Tenant, tenant => tenant.messages, { cascade: true })
  @JoinColumn({
    name: 'tenant_id',
  })
  tenant: Tenant;
}

@Entity()
export class Notification extends BaseEntity {
  @Column()
  notification: string;

  @ManyToOne(type => LandLord, landlord => landlord.notifications, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToOne(type => Tenant, tenant => tenant.notifications, { cascade: true })
  @JoinColumn({
    name: 'tenant_id',
  })
  tenant: Tenant;
}

@Entity()
export class Task extends BaseEntity {
  @Column()
  task: string;

  @ManyToOne(type => LandLord, landlord => landlord.tasks, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToOne(type => Tenant, tenant => tenant.tasks, { cascade: true })
  @JoinColumn({
    name: 'tenant_id',
  })
  tenant: Tenant;
}

@Entity()
export class Note extends BaseEntity {
  @Column()
  note: string;

  @ManyToOne(type => LandLord, landlord => landlord.notes, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToOne(type => Tenant, tenant => tenant.notes, { cascade: true })
  @JoinColumn({
    name: 'tenant_id',
  })
  tenant: Tenant;
}

@Entity()
export class Event extends BaseEntity {
  @Column()
  event: string;

  @ManyToOne(type => LandLord, landlord => landlord.events, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToOne(type => Tenant, tenant => tenant.events, { cascade: true })
  @JoinColumn({
    name: 'tenant_id',
  })
  tenant: Tenant;
}

export class Contact extends BaseEntity {
  @Column()
  contact: string;

  @ManyToOne(type => LandLord, landlord => landlord.contacts, { cascade: true })
  @JoinColumn({
    name: 'landlord_id',
  })
  landlord: LandLord;

  @ManyToOne(type => Tenant, tenant => tenant.contacts, { cascade: true })
  @JoinColumn({
    name: 'tenant_id',
  })
  tenant: Tenant;
}
