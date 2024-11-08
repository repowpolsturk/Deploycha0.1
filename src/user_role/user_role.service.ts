// src/user-role/user_role.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRoleDto } from './dto/create-user_role.dto';
import { UpdateUserRoleDto } from './dto/update-user_role.dto';
import { UserRole } from './entity/user_role.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
  ) {}

  

  async createUserRole(createUserRoleDto: CreateUserRoleDto): Promise<UserRole> {
    const userRole = this.userRoleRepository.create(createUserRoleDto);
    return await this.userRoleRepository.save(userRole);
  }

  async getUserRole(id: number): Promise<UserRole> {
    const userRole = await this.userRoleRepository.findOne({ where: { id } });
    if (!userRole) {
      throw new NotFoundException(`UserRole with ID ${id} not found`);
    }
    return userRole;
  }

  async updateUserRole(id: number, updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole> {
    await this.userRoleRepository.update(id, updateUserRoleDto);
    return this.getUserRole(id);
  }

  async deleteUserRole(id: number): Promise<void> {
    const result = await this.userRoleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`UserRole with ID ${id} not found`);
    }
  }

  async getAllUserRoles(): Promise<UserRole[]> {
    return await this.userRoleRepository.find();
  }
}
