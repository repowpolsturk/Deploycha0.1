// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/roles/entity/role.entity';
import { JwtModule } from '@nestjs/jwt'; // Добавьте JwtModule

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role]),
    JwtModule.register({
      secret: 'your-secret-key', // Используйте ваш секретный ключ
      signOptions: { expiresIn: '1h' }, // Настройка времени жизни токена
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Экспортируем сервис
})
export class UserModule {}
