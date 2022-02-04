"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenant = void 0;
const tslib_1 = require("tslib");
/**
* @Tenant Entity
tenant can be a landlord, tenant, or manager
tenant can be managed by a manager (manager can manage multiple tenants) or by a landlord (landlord can manage only one tenant)
 */
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const Bill_entity_1 = require("./Bill.entity");
const Landlord_entity_1 = require("./Landlord.entity");
const Manager_entity_1 = require("./Manager.entity");
const Message_entity_1 = require("./Message.entity");
const Property_entity_1 = require("./Property.entity");
let Tenant = class Tenant extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Property_entity_1.Property, property => property.tenants, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'tenant_property', joinColumn: { name: 'tenant_id' }, inverseJoinColumn: { name: 'property_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Lease, lease => lease.tenant, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "leases", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Bill, bill => bill.tenant, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "bills", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Payment, payment => payment.tenant, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "payments", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Invoice, invoice => invoice.tenant, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "invoices", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Receipt, receipt => receipt.tenant, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "receipts", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Note, note => note.tenant, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "notes", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Document, document => document.tenant, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "documents", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Message, message => message.tenant, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "messages", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Notification, notification => notification.tenant, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'tenant_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "notifications", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Task, task => task.tenant, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'tenant_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "tasks", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Event, event => event.tenant, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'tenant_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "events", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Message_entity_1.Contact, contact => contact.tenant, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'tenant_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "contacts", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Manager_entity_1.Manager, manager => manager.tenants, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'tenant_manager', joinColumn: { name: 'tenant_id' }, inverseJoinColumn: { name: 'manager_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "manager", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Landlord_entity_1.LandLord, landlord => landlord.tenants, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'tenant_landlord', joinColumn: { name: 'tenant_id' }, inverseJoinColumn: { name: 'landlord_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Tenant.prototype, "landlords", void 0);
Tenant = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Tenant);
exports.Tenant = Tenant;
//# sourceMappingURL=Tenant.entity.js.map