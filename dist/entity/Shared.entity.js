"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const tslib_1 = require("tslib");
const Base_entity_1 = require("./Base.entity");
const Profile_entity_1 = require("./Profile.entity");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Property_entity_1 = require("./Property.entity");
let Address = class Address extends Base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "street", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "zip", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Address.prototype, "country", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Property_entity_1.Property, property => property.propertyAddress),
    (0, typeorm_1.JoinColumn)(),
    (0, tslib_1.__metadata)("design:type", Array)
], Address.prototype, "property", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Profile_entity_1.Profile, profile => profile.address),
    (0, typeorm_1.JoinColumn)({ name: 'profile' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Address.prototype, "profile", void 0);
Address = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Address);
exports.Address = Address;
