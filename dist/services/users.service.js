"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSource_1 = require("../dataSource");
const User_entity_1 = require("../entity/User.entity");
const util_1 = require("../utils/util");
class UserService {
    constructor() {
        this.users = dataSource_1.UdremsData.getRepository(User_entity_1.User);
    }
    async checkUserExist(email) {
        const user = await this.users.findOne({ where: { email } });
        return (0, util_1.isEmpty)(user);
    }
    async checkUserNameExist(userName) {
        const user = await this.users.findOne({ where: { userName } });
        return (0, util_1.isEmpty)(user);
    }
    async checkUserPhoneExist(phoneNumber) {
        const user = await this.users.findOne({ where: { phoneNumber } });
        return (0, util_1.isEmpty)(user);
    }
}
exports.default = UserService;
