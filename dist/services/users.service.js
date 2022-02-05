"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = (0, tslib_1.__importDefault)(require("bcrypt"));
const HttpException_1 = require("@exceptions/HttpException");
const users_model_1 = (0, tslib_1.__importDefault)(require("@models/users.model"));
const util_1 = require("@utils/util");
class UserService {
    constructor() {
        this.users = users_model_1.default;
    }
    async findAllUser() {
        const users = this.users;
        return users;
    }
    async findUserById(userId) {
        const findUser = this.users.find(user => user.id === userId);
        if (!findUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        return findUser;
    }
    async createUser(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "You're not userData");
        const findUser = this.users.find(user => user.email === userData.email);
        if (findUser)
            throw new HttpException_1.HttpException(409, `Your email ${userData.email} already exists`);
        const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
        const createUserData = Object.assign(Object.assign({ id: this.users.length + 1 }, userData), { password: hashedPassword });
        this.users = [...this.users, createUserData];
        return createUserData;
    }
    async updateUser(userId, userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "You're not userData");
        const findUser = this.users.find(user => user.id === userId);
        if (!findUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
        const updateUserData = this.users.map((user) => {
            if (user.id === findUser.id)
                user = Object.assign(Object.assign({ id: userId }, userData), { password: hashedPassword });
            return user;
        });
        return updateUserData;
    }
    async deleteUser(userId) {
        const findUser = this.users.find(user => user.id === userId);
        if (!findUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        const deleteUserData = this.users.filter(user => user.id !== findUser.id);
        return deleteUserData;
    }
}
exports.default = UserService;
//# sourceMappingURL=users.service.js.map