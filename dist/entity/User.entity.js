"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
/**
 * @user entity
 * @description
 * @author Chidozie C. Okafor
 *
 */
const Base_entity_1 = require("./Base.entity");
const Profile_entity_1 = require("./Profile.entity");
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const class_validator_1 = require("class-validator");
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
let User = class User extends Base_entity_1.BaseEntity {
    // hash password before inserting into database
    async hashPassword() {
        const salt = await bcrypt_1.default.genSalt(10);
        this.password = await bcrypt_1.default.hash(this.password, salt);
    }
    // create profile for user on signup
    async createProfile() {
        const profile = await new Profile_entity_1.Profile();
        profile.user = this;
        // this.profile = profile;
    }
    // generate token for user
    async generateToken() {
        const token = await jsonwebtoken_1.default.sign({ id: this.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        return token;
    }
    // compare password
    async comparePassword(password) {
        return await bcrypt_1.default.compare(password, this.password);
    }
    // get full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    async validatePassword(password) {
        return await bcrypt_1.default.compare(password, this.password);
    }
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "userName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true, unique: true }),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], User.prototype, "isActive", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['landlord', 'tenant', 'manager'], default: 'tenant' }),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsBoolean)(),
    (0, typeorm_1.Column)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], User.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToOne)(() => Profile_entity_1.Profile, profile => profile.user),
    (0, typeorm_1.JoinColumn)({ name: 'profile' }),
    (0, tslib_1.__metadata)("design:type", Profile_entity_1.Profile)
], User.prototype, "profile", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.BeforeInsert)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], User.prototype, "hashPassword", null);
(0, tslib_1.__decorate)([
    (0, typeorm_1.BeforeInsert)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], User.prototype, "createProfile", null);
User = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
