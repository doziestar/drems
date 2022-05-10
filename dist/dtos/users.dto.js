import { __decorate, __metadata } from "tslib";
import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';
export class CreateUserDto {
}
__decorate([
    IsEmail(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    IsPhoneNumber(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phoneNumber", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
export class LoginUserDto {
}
__decorate([
    IsEmail(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
