"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const tslib_1 = require("tslib");
/**
 * Transaction entity
 */
const account_enum_1 = require("@/enum/account.enum");
const Base_entity_1 = require("@entity/Base.entity");
const Profile_entity_1 = require("@entity/Profile.entity");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let Transaction = class Transaction extends Base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "amount", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: account_enum_1.TransactionType, default: account_enum_1.TransactionType.Income }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "account", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => Profile_entity_1.Profile),
    (0, typeorm_1.JoinColumn)({ name: 'user' }),
    (0, tslib_1.__metadata)("design:type", Profile_entity_1.Profile)
], Transaction.prototype, "profile", void 0);
Transaction = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=Account.entity.js.map