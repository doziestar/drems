"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const tslib_1 = require("tslib");
const Base_entity_1 = require("@entity/Base.entity");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
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
Address = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Address);
exports.Address = Address;
//# sourceMappingURL=Shared.entity.js.map