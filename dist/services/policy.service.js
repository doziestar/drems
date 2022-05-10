"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyService = void 0;
const Policy_model_1 = require("../models/Policy.model");
class PolicyService {
    async create(policy) {
        const newPolicy = await Policy_model_1.Policy.create(Object.assign({}, policy));
        return newPolicy;
    }
    async index() {
        const policies = await Policy_model_1.Policy.findAll();
        return policies;
    }
    async show(id) {
        const policy = await Policy_model_1.Policy.findByPk(id);
        return policy;
    }
    async update(id, policy) {
        const updatedPolicy = await Policy_model_1.Policy.update(policy, {
            where: {
                id,
            },
        });
        console.log(updatedPolicy);
        return;
    }
    async destroy(id) {
        const deletedPolicy = await Policy_model_1.Policy.destroy({
            where: {
                id,
            },
        });
        console.log(deletedPolicy);
        return;
    }
}
exports.PolicyService = PolicyService;
