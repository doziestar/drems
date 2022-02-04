"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
class UserRepository {
    constructor() {
        this.userRepository = (0, typeorm_1.getRepository)(User_1.User);
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id) {
        return await this.userRepository.findOne(id);
    }
    async save(user) {
        return await this.userRepository.save(user);
    }
    async remove(user) {
        await this.userRepository.remove(user);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repo.js.map