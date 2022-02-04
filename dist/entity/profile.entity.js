"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const base_entity_1 = require("./base.entity");
let UserProfile = class UserProfile extends base_entity_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserProfile.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToOne)(type => User_1.User, user => user.profile, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
    }),
    (0, tslib_1.__metadata)("design:type", User_1.User)
], UserProfile.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserProfile.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserProfile.prototype, "avatar", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserProfile.prototype, "phoneNumber", void 0);
UserProfile = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], UserProfile);
exports.UserProfile = UserProfile;
//# sourceMappingURL=profile.entity.js.map