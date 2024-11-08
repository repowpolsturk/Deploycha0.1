import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class s {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsString()
  phoneNumber?: string;
}


export class UpdateUsersRole {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsString()
  phoneNumber?: string;
}


export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
