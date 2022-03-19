"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRepository = void 0;
const Property_entity_1 = require("../entity/Property.entity");
const typeorm_1 = require("typeorm");
class PropertyRepository {
    constructor() {
        this.propertyRepository = (0, typeorm_1.getRepository)(Property_entity_1.Property);
    }
    async create(property) {
        const newProperty = await this.propertyRepository.create(property);
        await this.propertyRepository.save(newProperty);
        return newProperty;
    }
    async findById(id) {
        const property = await this.propertyRepository.findOne({
            where: {
                id,
            },
        });
        return property;
    }
    async findByAddress(address) {
        const properties = await this.propertyRepository.find({
            where: {
                propertyAddress: address,
            },
        });
        return properties;
    }
    async findByManager(manager) {
        const properties = await this.propertyRepository.find({
            where: {
                user: manager,
            },
        });
        return properties;
    }
    async findByLandlord(landlord) {
        const properties = await this.propertyRepository.find({
            where: {
                user: landlord,
            },
        });
        return properties;
    }
    async findByTenant(tenant) {
        const properties = await this.propertyRepository.find({
            where: {
                user: tenant,
            },
        });
        return properties;
    }
    async update(property, id) {
        if (await this.propertyRepository.update(id, property)) {
            return property;
        }
    }
    async delete(id) {
        await this.propertyRepository.delete(id);
    }
}
exports.PropertyRepository = PropertyRepository;
