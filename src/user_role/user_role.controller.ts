// src/user-role/user_role.controller.ts
import { Controller, Post, Get, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { UserRoleService } from './user_role.service';
import { CreateUserRoleDto } from './dto/create-user_role.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UpdateUserRoleDto } from './dto/update-user_role.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('User Roles')
@ApiBearerAuth()
@Controller('user-role')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  @Roles('ADMIN')
  async createUserRole(@Body() createUserRoleDto: CreateUserRoleDto) {
    return await this.userRoleService.createUserRole(createUserRoleDto);
  }

  @Get(':id')
  async getUserRole(@Param('id') id: number) {
    return await this.userRoleService.getUserRole(id);
  }

  @Patch(':id')
  @Roles('ADMIN')
  async updateUserRole(
    @Param('id') id: number,
    @Body() updateUserRoleDto: UpdateUserRoleDto,
  ) {
    return await this.userRoleService.updateUserRole(id, updateUserRoleDto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  async deleteUserRole(@Param('id') id: number) {
    return await this.userRoleService.deleteUserRole(id);
  }

  @Get()
  async getAllUserRoles() {
    return await this.userRoleService.getAllUserRoles();
  }
}