import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { CreateResultDto } from './dto/result.dto';
import { ResultService } from './results.service';

@Controller('results')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Post()
  async create(@Body() createResultDto: CreateResultDto) {
    return this.resultService.create(createResultDto);
  }

  @Get()
  async findAll() {
    return this.resultService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.resultService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateResultDto: CreateResultDto) {
    return this.resultService.update(id, updateResultDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.resultService.remove(id);
  }
}
