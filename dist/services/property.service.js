"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRepository = void 0;
const dataSource_1 = require("../dataSource");
const Property_entity_1 = require("../entity/Property.entity");
class PropertyRepository {
    async create(property) {
        const propertyRepository = dataSource_1.UdremsData.getRepository(Property_entity_1.Property);
        const newProperty = await propertyRepository.create(property);
        await propertyRepository.save(newProperty);
        return newProperty;
    }
    async findById(id) {
        const propertyRepository = dataSource_1.UdremsData.getRepository(Property_entity_1.Property);
        const property = await propertyRepository.findOne({
            where: {
                id,
            },
        });
        return property;
    }
    async findByAddress(address) {
        const propertyRepository = dataSource_1.UdremsData.getRepository(Property_entity_1.Property);
        const properties = await propertyRepository.find({
            where: {
                propertyAddress: address,
            },
        });
        return properties;
    }
    // public async findByManager(manager: IUser): Promise<IProperty[]> {
    //   const propertyRepository: Repository<Property> = UdremsData.getRepository(Property);
    //   const properties: IProperty[] = await propertyRepository.find({
    //     where: {
    //       user: manager,
    //     },
    //   });
    //   return properties;
    // }
    // public async findByLandlord(landlord: IUser): Promise<IProperty[]> {
    //   const propertyRepository: Repository<Property> = UdremsData.getRepository(Property);
    //   const properties: IProperty[] = await propertyRepository.find({
    //     where: {
    //       user: landlord,
    //     },
    //   });
    //   return properties;
    // }
    // public async findByTenant(tenant: IUser): Promise<IProperty[]> {
    //   const propertyRepository: Repository<Property> = UdremsData.getRepository(Property);
    //   const properties: IProperty[] = await propertyRepository.find({
    //     where: {
    //       user: tenant,
    //     },
    //   });
    //   return properties;
    // }
    // public async update(property: IProperty, id: string): Promise<IProperty> {
    //   const propertyRepository: Repository<Property> = UdremsData.getRepository(Property);
    //   if (await propertyRepository.update(id, property)) {
    //     return property;
    //   }
    // }
    async delete(id) {
        const propertyRepository = dataSource_1.UdremsData.getRepository(Property_entity_1.Property);
        await propertyRepository.delete(id);
    }
}
exports.PropertyRepository = PropertyRepository;
