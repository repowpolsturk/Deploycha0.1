import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entity/user.entity';
import { Role } from 'src/roles/entity/role.entity';
import { SignUpDto } from 'src/auth/dto/sing-up.dto';

@Injectable()
export class UserService {
  getAllUsers: any;
  getUserById: any;
  signIn: any;
    validateUserRole: any;
  findById: any;
  create: any;
  findByEmail: any;
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    private jwtService: JwtService,
  ) {}

  // Метод регистрации
  async signUp(signUpDto: SignUpDto): Promise<User> {
    const { fullName, email, password, roleId } = signUpDto;

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Находим роль по roleId
    const role = await this.roleRepository.findOne({ where: { id: roleId } });
    if (!role) {
      throw new NotFoundException('Role not found');
    }

    // Создаём нового пользователя
    const user = this.userRepository.create({
      fullName,
      email,
      passwordHash: hashedPassword,  // Используем хешированный пароль
      role,
      isActive: true,
    });

    // Сохраняем пользователя в базе
    return await this.userRepository.save(user);
  }
}
