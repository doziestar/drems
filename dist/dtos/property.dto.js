"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePropertyDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreatePropertyDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreatePropertyDto.prototype, "propertyName", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreatePropertyDto.prototype, "propertyType", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsArray)(),
    (0, tslib_1.__metadata)("design:type", Object)
], CreatePropertyDto.prototype, "propertyAddress", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsArray)(),
    (0, tslib_1.__metadata)("design:type", Array)
], CreatePropertyDto.prototype, "tenants", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsArray)(),
    (0, tslib_1.__metadata)("design:type", Array)
], CreatePropertyDto.prototype, "landlord", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", Object)
], CreatePropertyDto.prototype, "propertyManager", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", Date)
], CreatePropertyDto.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", Date)
], CreatePropertyDto.prototype, "updatedAt", void 0);
exports.CreatePropertyDto = CreatePropertyDto;
