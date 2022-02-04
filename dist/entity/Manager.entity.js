"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.ManagerLevel = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const Bill_entity_1 = require("./Bill.entity");
const LandLord_entity_1 = require("./LandLord.entity");
const Property_entity_1 = require("./Property.entity");
const Tenant_entity_1 = require("./Tenant.entity");
var ManagerLevel;
(function (ManagerLevel) {
    ManagerLevel["High"] = "High";
    ManagerLevel["Medium"] = "Medium";
    ManagerLevel["Low"] = "Low";
})(ManagerLevel = exports.ManagerLevel || (exports.ManagerLevel = {}));
let Manager = class Manager extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Manager.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: ManagerLevel, default: ManagerLevel.Medium }),
    (0, tslib_1.__metadata)("design:type", String)
], Manager.prototype, "level", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => LandLord_entity_1.LandLord, landlord => landlord.managers, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'landlord_id',
    }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Manager.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Property_entity_1.Property, property => property.managers, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'manager_property', joinColumn: { name: 'manager_id' }, inverseJoinColumn: { name: 'property_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Manager.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Tenant_entity_1.Tenant, tenant => tenant.manager, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Manager.prototype, "tenants", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Bill, bill => bill.manager, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Manager.prototype, "bills", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Payment, payment => payment.manager, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Manager.prototype, "payments", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Invoice, invoice => invoice.manager, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Manager.prototype, "invoices", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Lease, lease => lease.manager, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Manager.prototype, "leases", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Document, document => document.manager, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Manager.prototype, "documents", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Bill_entity_1.Receipt, receipt => receipt.manager, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], Manager.prototype, "receipts", void 0);
Manager = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Manager);
exports.Manager = Manager;
//# sourceMappingURL=Manager.entity.js.map