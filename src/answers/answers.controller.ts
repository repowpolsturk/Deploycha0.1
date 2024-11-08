import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateAnswerDto } from './dto/answer.dto';
import { AnswerService } from './answers.service';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(createAnswerDto);
  }

  @Get()
  async findAll() {
    return this.answerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.answerService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateAnswerDto: CreateAnswerDto) {
    return this.answerService.update(id, updateAnswerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.answerService.remove(id);
  }
}
