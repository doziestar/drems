import { AddressDocument } from '@/interfaces/shared.interface';
import { IUser } from '@/interfaces/users.interface';
import { IsArray, IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  public propertyName: string;

  @IsString()
  public propertyType: string;

  @IsArray()
  public propertyAddress: AddressDocument;

  @IsArray()
  public tenants: IUser[];

  @IsArray()
  public landlord: IUser[];

  @IsString()
  public propertyManager: IUser;

  @IsString()
  public createdAt: Date;

  @IsString()
  public updatedAt: Date;
}
