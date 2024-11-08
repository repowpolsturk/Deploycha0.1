// src/user_role/user_role.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/users/users.module'; // Импортируем UserModule
import { UserRoleController } from './user_role.controller';
import { UserRoleService } from './user_role.service';
import { UserRole } from './entity/user_role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole]), UserModule], // Импортируем UserModule
  controllers: [UserRoleController],
  providers: [UserRoleService],
})
export class UserRoleModule {}
