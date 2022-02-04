"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandLord = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const Bill_entity_1 = require("./Bill.entity");
const Manager_entity_1 = require("./Manager.entity");
const Message_entity_1 = require("./Message.entity");
const Property_entity_1 = require("./Property.entity");
const Tenant_entity_1 = require("./Tenant.entity");
let LandLord = class LandLord extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Property_entity_1.Property, property => property.landlords, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'landlord_property', joinColumn: { name: 'landlord_id' }, inverseJoinColumn: { name: 'property_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Lease, lease => lease.landlord, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "leases", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Bill, bill => bill.landlord, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "bills", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Payment, payment => payment.landlord, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "payments", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Invoice, invoice => invoice.landlord, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "invoices", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Receipt, receipt => receipt.landlord, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "receipts", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Note, note => note.landlord, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "notes", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Document, document => document.landlord, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "documents", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Message, message => message.landlord, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "messages", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Notification, notification => notification.landlord, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'landlord_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "notifications", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Task, task => task.landlord, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'landlord_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "tasks", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Event, event => event.landlord, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'landlord_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "events", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Contact, contact => contact.landlord, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'landlord_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "contacts", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Manager_entity_1.Manager, manager => manager.landlord, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'landlord_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "managers", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Tenant_entity_1.Tenant, tenant => tenant.landlords, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'landlord_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandLord.prototype, "tenants", void 0);
LandLord = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], LandLord);
exports.LandLord = LandLord;
//# sourceMappingURL=LandLord.entity.js.map