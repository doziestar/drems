"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_entity_1 = require("@entity/User.entity");
const typeorm_1 = require("typeorm");
class AuthRepository {
    async signup(createUserDto) {
        const userRepository = (0, typeorm_1.getRepository)(User_entity_1.User);
        userRepository.create(createUserDto);
        const user = await userRepository.save(createUserDto);
        return user;
    }
    async login(loginUserDto) {
        const userRepository = (0, typeorm_1.getRepository)(User_entity_1.User);
        const user = await userRepository.findOne({
            where: { email: loginUserDto.email },
        });
        if (user) {
            const passwordMatch = await user.comparePassword(loginUserDto.password);
            if (passwordMatch) {
                const token = await user.generateToken();
                return {
                    user,
                    token,
                };
            }
        }
        throw new Error('Invalid credentials');
    }
}
exports.default = AuthRepository;
//# sourceMappingURL=Auth.repo.js.map