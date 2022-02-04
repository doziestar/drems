"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactionPaymentMethod = exports.TransactionCategory = exports.TransactionStatus = exports.TransactionType = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../entity/base.entity");
const User_1 = require("./User");
// enum for transaction type (income, expense)
var TransactionType;
(function (TransactionType) {
    TransactionType["Income"] = "income";
    TransactionType["Expense"] = "expense";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
// enum for transaction status (pending, approved, rejected)
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Pending"] = "pending";
    TransactionStatus["Approved"] = "approved";
    TransactionStatus["Rejected"] = "rejected";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
// enum for transaction category (repair, rent, utility, etc)
var TransactionCategory;
(function (TransactionCategory) {
    TransactionCategory["Repair"] = "repair";
    TransactionCategory["Rent"] = "rent";
    TransactionCategory["Utility"] = "utility";
    TransactionCategory["Food"] = "food";
    TransactionCategory["Travel"] = "travel";
    TransactionCategory["Other"] = "other";
})(TransactionCategory = exports.TransactionCategory || (exports.TransactionCategory = {}));
var TransactionPaymentMethod;
(function (TransactionPaymentMethod) {
    TransactionPaymentMethod["Cash"] = "cash";
    TransactionPaymentMethod["Check"] = "check";
    TransactionPaymentMethod["CreditCard"] = "creditCard";
    TransactionPaymentMethod["DebitCard"] = "debitCard";
    TransactionPaymentMethod["Other"] = "other";
})(TransactionPaymentMethod = exports.TransactionPaymentMethod || (exports.TransactionPaymentMethod = {}));
// transaction entity
let Transaction = class Transaction extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: TransactionType, default: TransactionType.Expense }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: TransactionStatus, default: TransactionStatus.Pending }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: TransactionCategory, default: TransactionCategory.Other }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: TransactionPaymentMethod, default: TransactionPaymentMethod.Cash }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "paymentMethod", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    (0, class_validator_1.IsCurrency)({ locale: 'en-US' }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "amount", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "receipt", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "notes", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", Date)
], Transaction.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.ManyToOne)(type => User_1.User, user => user.transactions),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    (0, tslib_1.__metadata)("design:type", User_1.User)
], Transaction.prototype, "user", void 0);
Transaction = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=Transactions.entity.js.map