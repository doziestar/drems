"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_entity_1 = require("../entity/User.entity");
const typeorm_1 = require("typeorm");
class AuthRepository {
    async signup(createUserDto) {
        const userRepository = (0, typeorm_1.getRepository)(User_entity_1.User);
        const userExist = await userRepository.findOne({ where: { email: createUserDto.email } });
        console.log(userExist);
        if (userExist) {
            throw new Error('User already exist');
        }
        const user = await userRepository.create(createUserDto);
        const savedUser = await userRepository.save(user);
        return savedUser;
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
