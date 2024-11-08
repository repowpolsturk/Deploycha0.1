import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { CreateTypeDto } from './dto/type.dto';
import { TypeService } from './types.service';

@Controller('types')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post()
  async create(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.create(createTypeDto);
  }

  @Get()
  async findAll() {
    return this.typeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.typeService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTypeDto: CreateTypeDto) {
    return this.typeService.update(id, updateTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.typeService.remove(id);
  }
}
