import { IsEmail, IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsInt()
  @IsNotEmpty()
  roleId: number;  // Это поле для ID роли
}
