import { CreatePropertyDto } from '@/dtos/property.dto';
import { Property } from '@entity/Property.entity';
import { IProperty } from '@interfaces/property.interface';
import { AddressDocument } from '@interfaces/shared.interface';
import { IUser } from '@interfaces/users.interface';
import { getRepository, Repository } from 'typeorm';

export class PropertyRepository {
  public async create(property: CreatePropertyDto): Promise<IProperty> {
    const propertyRepository: Repository<IProperty> = getRepository(Property);
    const newProperty: IProperty = await propertyRepository.create(property);
    await propertyRepository.save(newProperty);
    return newProperty;
  }

  public async findById(id: string): Promise<IProperty> {
    const propertyRepository: Repository<IProperty> = getRepository(Property);

    const property: IProperty = await propertyRepository.findOne({
      where: {
        id,
      },
    });
    return property;
  }

  public async findByAddress(address: AddressDocument): Promise<IProperty[]> {
    const propertyRepository: Repository<IProperty> = getRepository(Property);

    const properties: IProperty[] = await propertyRepository.find({
      where: {
        propertyAddress: address,
      },
    });
    return properties;
  }

  public async findByManager(manager: IUser): Promise<IProperty[]> {
    const propertyRepository: Repository<IProperty> = getRepository(Property);

    const properties: IProperty[] = await propertyRepository.find({
      where: {
        user: manager,
      },
    });
    return properties;
  }

  public async findByLandlord(landlord: IUser): Promise<IProperty[]> {
    const propertyRepository: Repository<IProperty> = getRepository(Property);

    const properties: IProperty[] = await propertyRepository.find({
      where: {
        user: landlord,
      },
    });
    return properties;
  }

  public async findByTenant(tenant: IUser): Promise<IProperty[]> {
    const propertyRepository: Repository<IProperty> = getRepository(Property);

    const properties: IProperty[] = await propertyRepository.find({
      where: {
        user: tenant,
      },
    });
    return properties;
  }

  public async update(property: IProperty, id: string): Promise<IProperty> {
    const propertyRepository: Repository<IProperty> = getRepository(Property);

    if (await propertyRepository.update(id, property)) {
      return property;
    }
  }

  public async delete(id: string): Promise<void> {
    const propertyRepository: Repository<IProperty> = getRepository(Property);

    await propertyRepository.delete(id);
  }
}
