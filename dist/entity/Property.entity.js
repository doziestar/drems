"use strict";
/**
 * @Property entity
 * @description Property entity
 * @author Chidozie C. Okafor
 * @version 1.0
 * @since 2022-02-01
 * @export
 * @class Property
 * @extends {BaseEntity}
 * @implements {Entity}
 * @implements {IProperty}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const tslib_1 = require("tslib");
// import { Tenant } from '../interfaces/tenant.interface';
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Shared_entity_1 = require("./Shared.entity");
let Property = class Property extends typeorm_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Property.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['HOUSE', 'APARTMENT', 'OFFICE', 'SHOP', 'STORE', 'WAREHOUSE', 'OTHER'] }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", Object)
], Property.prototype, "propertyType", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Property.prototype, "propertyName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToMany)(type => Shared_entity_1.Address, address => address.property),
    (0, tslib_1.__metadata)("design:type", Array)
], Property.prototype, "propertyAddress", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsDate)(),
    (0, tslib_1.__metadata)("design:type", Date)
], Property.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsDate)(),
    (0, tslib_1.__metadata)("design:type", Date)
], Property.prototype, "updatedAt", void 0);
Property = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Property);
exports.Property = Property;
