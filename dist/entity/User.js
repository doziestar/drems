"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.AccountType = void 0;
const tslib_1 = require("tslib");
const bcrypt = (0, tslib_1.__importStar)(require("bcrypt"));
const class_validator_1 = require("class-validator");
const jwt = (0, tslib_1.__importStar)(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("../entity/profile.entity");
const base_entity_1 = require("./base.entity");
const Transactions_entity_1 = require("./Transactions.entity");
// enum for account type (landlord, tenant, manager)
var AccountType;
(function (AccountType) {
    AccountType["Landlord"] = "landlord";
    AccountType["Tenant"] = "tenant";
    AccountType["Manager"] = "manager";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
let User = class User extends base_entity_1.BaseEntity {
    // hash password before saving using bcrypt
    // salt: string;
    async hashPassword() {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    // compare password with hash
    async comparePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
    // generate token
    generateToken() {
        const token = jwt.sign({
            id: this.id,
            name: this.name,
            email: this.email,
            avatar: this.avatar,
            phoneNumber: this.phoneNumber,
        }, process.env.JWT_SECRET);
        return token;
    }
    // add profile to user after user is created
    async addProfile() {
        this.profile = new profile_entity_1.UserProfile();
        this.profile.user = this;
    }
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
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
    (0, typeorm_1.Column)({ nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ type: 'enum', enum: AccountType, default: AccountType.Tenant }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "phoneNumber", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToOne)(type => profile_entity_1.UserProfile, userProfile => userProfile.user, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", profile_entity_1.UserProfile)
], User.prototype, "profile", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToMany)(type => Transactions_entity_1.Transaction, transaction => transaction.user, { cascade: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "transactions", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "password", void 0);
User = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map