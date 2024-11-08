import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserRoleDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  roleId: number;

  @IsBoolean()
  isCreator: boolean;
}
