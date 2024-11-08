import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateUserRoleDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  roleId: number;

  @IsBoolean()
  isCreator: boolean;
}