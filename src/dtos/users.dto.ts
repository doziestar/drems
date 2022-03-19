import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsPhoneNumber()
  public phoneNumber: string;

  @IsString()
  public userName: string;

  @IsString()
  public firstName?: string;

  @IsString()
  public lastName?: string;

  @IsString()
  public password: string;

  @IsString()
  public confirmPassword: string;
}

export class LoginUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
