// src/user-role/dto/create-user_role.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserRoleDto {
  @ApiProperty({ example: 1, description: 'ID пользователя' })
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: 2, description: 'ID роли' })
  @IsInt()
  @IsNotEmpty()
  roleId: number;

  @ApiProperty({ example: true, description: 'Указывает, является ли пользователь создателем' })
  @IsBoolean()
  isCreator: boolean;
}