import { CreatePropertyDto } from '@/dtos/property.dto';
import { Property } from '@entity/Property.entity';
import { IProperty } from '@interfaces/property.interface';
import { AddressDocument } from '@interfaces/shared.interface';
import { IUser } from '@interfaces/users.interface';
import { getRepository, Repository } from 'typeorm';

export class PropertyRepository {
  propertyRepository: Repository<Property> = getRepository(Property);
  public async create(property: CreatePropertyDto): Promise<IProperty> {
    const newProperty: IProperty = await this.propertyRepository.create(property);
    await this.propertyRepository.save(newProperty);
    return newProperty;
  }

  public async findById(id: string): Promise<IProperty> {
    const property: IProperty = await this.propertyRepository.findOne({
      where: {
        id,
      },
    });
    return property;
  }

  public async findByAddress(address: AddressDocument): Promise<IProperty[]> {
    const properties: IProperty[] = await this.propertyRepository.find({
      where: {
        propertyAddress: address,
      },
    });
    return properties;
  }

  public async findByManager(manager: IUser): Promise<IProperty[]> {
    const properties: IProperty[] = await this.propertyRepository.find({
      where: {
        propertyManager: manager,
      },
    });
    return properties;
  }

  public async findByLandlord(landlord: IUser): Promise<IProperty[]> {
    const properties: IProperty[] = await this.propertyRepository.find({
      where: {
        landlord: landlord,
      },
    });
    return properties;
  }

  public async findByTenant(tenant: IUser): Promise<IProperty[]> {
    const properties: IProperty[] = await this.propertyRepository.find({
      where: {
        tenants: tenant,
      },
    });
    return properties;
  }

  public async update(property: IProperty): Promise<IProperty> {
    const updatedProperty: IProperty = await this.propertyRepository.save(property);
    return updatedProperty;
  }

  public async delete(id: number): Promise<void> {
    await this.propertyRepository.delete(id);
  }
}
