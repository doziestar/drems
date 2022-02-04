"use strict";
/**
* @property entity
* @property entityName

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = exports.PropertyImage = exports.PropertyConditionStatus = exports.PropertyCondition = exports.PropertyStatus = exports.PropertyType = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const LandLord_entity_1 = require("./LandLord.entity");
const Manager_entity_1 = require("./Manager.entity");
const Tenant_entity_1 = require("./Tenant.entity");
var PropertyType;
(function (PropertyType) {
    PropertyType["House"] = "House";
    PropertyType["Apartment"] = "Apartment";
    PropertyType["Condo"] = "Condo";
    PropertyType["Townhouse"] = "Townhouse";
    PropertyType["Land"] = "Land";
    PropertyType["Other"] = "Other";
})(PropertyType = exports.PropertyType || (exports.PropertyType = {}));
var PropertyStatus;
(function (PropertyStatus) {
    PropertyStatus["Available"] = "Available";
    PropertyStatus["Sold"] = "Sold";
    PropertyStatus["UnderContract"] = "UnderContract";
    PropertyStatus["UnderConstruction"] = "UnderConstruction";
    PropertyStatus["Other"] = "Other";
})(PropertyStatus = exports.PropertyStatus || (exports.PropertyStatus = {}));
var PropertyCondition;
(function (PropertyCondition) {
    PropertyCondition["Excellent"] = "Excellent";
    PropertyCondition["Good"] = "Good";
    PropertyCondition["Fair"] = "Fair";
    PropertyCondition["Poor"] = "Poor";
    PropertyCondition["Other"] = "Other";
})(PropertyCondition = exports.PropertyCondition || (exports.PropertyCondition = {}));
var PropertyConditionStatus;
(function (PropertyConditionStatus) {
    PropertyConditionStatus["New"] = "New";
    PropertyConditionStatus["Used"] = "Used";
    PropertyConditionStatus["Other"] = "Other";
})(PropertyConditionStatus = exports.PropertyConditionStatus || (exports.PropertyConditionStatus = {}));
let PropertyImage = class PropertyImage extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyImage.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Property, property => property.images, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'property_id',
    }),
    (0, tslib_1.__metadata)("design:type", Property)
], PropertyImage.prototype, "property", void 0);
PropertyImage = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], PropertyImage);
exports.PropertyImage = PropertyImage;
let Property = class Property extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: PropertyType, default: PropertyType.House }),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: PropertyStatus, default: PropertyStatus.Available }),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: PropertyCondition, default: PropertyCondition.Excellent }),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "condition", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: PropertyConditionStatus, default: PropertyConditionStatus.New }),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "conditionStatus", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: PropertyStatus, default: PropertyStatus.Available }),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "zip", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "country", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Property.prototype, "latitude", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Property.prototype, "longitude", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => PropertyImage, image => image.property, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property.prototype, "images", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => LandLord_entity_1.LandLord, landlord => landlord.properties, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'property_landlord', joinColumn: { name: 'property_id' }, inverseJoinColumn: { name: 'landlord_id' } }),
    (0, tslib_1.__metadata)("design:type", LandLord_entity_1.LandLord)
], Property.prototype, "landlords", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToMany)(type => Tenant_entity_1.Tenant, tenant => tenant.properties, { cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'property_tenant', joinColumn: { name: 'property_id' }, inverseJoinColumn: { name: 'tenant_id' } }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property.prototype, "tenants", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Manager_entity_1.Manager, manager => manager.properties, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'manager_id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property.prototype, "managers", void 0);
Property = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Property);
exports.Property = Property;
//# sourceMappingURL=Property.entity.js.map