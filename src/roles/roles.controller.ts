import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { CreateRoleDto } from './dto/role.dto';
import { RoleService } from './roles.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  async findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.roleService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateRoleDto: CreateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.roleService.remove(id);
  }
}
