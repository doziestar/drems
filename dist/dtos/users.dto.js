"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = exports.CreateUserDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsPhoneNumber)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
exports.CreateUserDto = CreateUserDto;
class LoginUserDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginUserDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], LoginUserDto.prototype, "password", void 0);
exports.LoginUserDto = LoginUserDto;
