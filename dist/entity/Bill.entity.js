"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = exports.Payment = exports.Invoice = exports.Document = exports.Lease = exports.Bill = exports.Status = void 0;
const tslib_1 = require("tslib");
/**
@Bill entity
@Lease entity
@Document entity
@Invoice entity
@Payment entity
@Receipt entity
 */
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const LandLord_entity_1 = require("./LandLord.entity");
const Manager_entity_1 = require("./Manager.entity");
const Tenant_entity_1 = require("./Tenant.entity");
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Inactive"] = "Inactive";
})(Status = exports.Status || (exports.Status = {}));
let Bill = class Bill extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: Status, default: Status.Active }),
    (0, tslib_1.__metadata)("design:type", String)
], Bill.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.bills, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Bill.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Tenant_entity_1.Tenant, tenant => tenant.bills, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'bill_tenant', joinColumn: { name: 'bill_id' }, inverseJoinColumn: { name: 'tenant_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Bill.prototype, "tenant", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Manager_entity_1.Manager, manager => manager.bills, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'bill_manager', joinColumn: { name: 'bill_id' }, inverseJoinColumn: { name: 'manager_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Bill.prototype, "manager", void 0);
Bill = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Bill);
exports.Bill = Bill;
let Lease = class Lease extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: Status, default: Status.Active }),
    (0, tslib_1.__metadata)("design:type", String)
], Lease.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.leases, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Lease.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Tenant_entity_1.Tenant, tenant => tenant.leases, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'lease_tenant', joinColumn: { name: 'lease_id' }, inverseJoinColumn: { name: 'tenant_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Lease.prototype, "tenant", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Manager_entity_1.Manager, manager => manager.leases, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'lease_manager', joinColumn: { name: 'lease_id' }, inverseJoinColumn: { name: 'manager_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Lease.prototype, "manager", void 0);
Lease = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Lease);
exports.Lease = Lease;
let Document = class Document extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: Status, default: Status.Active }),
    (0, tslib_1.__metadata)("design:type", String)
], Document.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.documents, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Document.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Tenant_entity_1.Tenant, tenant => tenant.documents, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'document_tenant', joinColumn: { name: 'document_id' }, inverseJoinColumn: { name: 'tenant_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Document.prototype, "tenant", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Manager_entity_1.Manager, manager => manager.documents, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'document_manager', joinColumn: { name: 'document_id' }, inverseJoinColumn: { name: 'manager_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Document.prototype, "manager", void 0);
Document = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Document);
exports.Document = Document;
let Invoice = class Invoice extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: Status, default: Status.Active }),
    (0, tslib_1.__metadata)("design:type", String)
], Invoice.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.invoices, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Invoice.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Tenant_entity_1.Tenant, tenant => tenant.invoices, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'invoice_tenant', joinColumn: { name: 'invoice_id' }, inverseJoinColumn: { name: 'tenant_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Invoice.prototype, "tenant", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Manager_entity_1.Manager, manager => manager.invoices, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'invoice_manager', joinColumn: { name: 'invoice_id' }, inverseJoinColumn: { name: 'manager_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Invoice.prototype, "manager", void 0);
Invoice = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Invoice);
exports.Invoice = Invoice;
let Payment = class Payment extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: Status, default: Status.Active }),
    (0, tslib_1.__metadata)("design:type", String)
], Payment.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.payments, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Payment.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Tenant_entity_1.Tenant, tenant => tenant.payments, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'payment_tenant', joinColumn: { name: 'payment_id' }, inverseJoinColumn: { name: 'tenant_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Payment.prototype, "tenant", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Manager_entity_1.Manager, manager => manager.payments, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'payment_manager', joinColumn: { name: 'payment_id' }, inverseJoinColumn: { name: 'manager_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Payment.prototype, "manager", void 0);
Payment = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Payment);
exports.Payment = Payment;
let Receipt = class Receipt extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: Status, default: Status.Active }),
    (0, tslib_1.__metadata)("design:type", String)
], Receipt.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.receipts, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Receipt.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Tenant_entity_1.Tenant, tenant => tenant.receipts, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'receipt_tenant', joinColumn: { name: 'receipt_id' }, inverseJoinColumn: { name: 'tenant_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Receipt.prototype, "tenant", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Manager_entity_1.Manager, manager => manager.receipts, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'receipt_manager', joinColumn: { name: 'receipt_id' }, inverseJoinColumn: { name: 'manager_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Receipt.prototype, "manager", void 0);
Receipt = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Receipt);
exports.Receipt = Receipt;
//# sourceMappingURL=Bill.entity.js.map