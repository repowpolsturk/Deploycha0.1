import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleController } from './user_role.controller'; // Импортируем контроллер
import { UserRoleService } from './user_role.service'; // Импортируем сервис
import { UserRole } from './entity/user_role.entity'; // Импортируем сущность, а не контроллер

@Module({
  imports: [TypeOrmModule.forFeature([UserRole])],  // Правильный импорт сущности UserRole
  controllers: [UserRoleController],  // Контроллер
  providers: [UserRoleService],  // Сервис
})
export class UsersRoleModule {}
