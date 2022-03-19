"use strict";
/**
 * @Profile
 * @description
 * @author Chidozie C. Okafor
 * one-to-one relationship between User and Profile
 * @param {type} type
 * @param {type} type
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.AccountType = void 0;
const tslib_1 = require("tslib");
const Base_entity_1 = require("../../entity/Base.entity");
const Shared_entity_1 = require("../../entity/Shared.entity");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const User_entity_1 = require("./User.entity");
var AccountType;
(function (AccountType) {
    AccountType["Landlord"] = "landlord";
    AccountType["Tenant"] = "tenant";
    AccountType["Manager"] = "manager";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
let Profile = class Profile extends Base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Profile.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Shared_entity_1.Address, address => address.profile, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'address', referencedColumnName: 'id' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Profile.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsDate)(),
    (0, tslib_1.__metadata)("design:type", Date)
], Profile.prototype, "dateOfBirth", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: AccountType, default: AccountType.Tenant }),
    (0, tslib_1.__metadata)("design:type", String)
], Profile.prototype, "accountType", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToOne)(type => User_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'user' }),
    (0, tslib_1.__metadata)("design:type", User_entity_1.User)
], Profile.prototype, "user", void 0);
Profile = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Profile);
exports.Profile = Profile;
