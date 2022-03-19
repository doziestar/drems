"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class BaseEntity {
}
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, class_validator_1.IsUUID)(),
    (0, tslib_1.__metadata)("design:type", String)
], BaseEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.CreateDateColumn)(),
    (0, class_validator_1.IsDate)(),
    (0, tslib_1.__metadata)("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, class_validator_1.IsDate)(),
    (0, tslib_1.__metadata)("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
exports.BaseEntity = BaseEntity;
