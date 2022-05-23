import { IsDate, IsString } from 'class-validator';

/**
 * public amountToEnsure: number;
  public name: string;
  public email: string;
  public inceptionDate: Date;
  public installmentPayment: string;
  public clientId: string;
 */
export class CreatePolicyDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  installmentPayment: string;

  @IsString()
  insuranceType: string;

  @IsString()
  clientId: string;

  @IsDate()
  inceptionDate: Date;
}
