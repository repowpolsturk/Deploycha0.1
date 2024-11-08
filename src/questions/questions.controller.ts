import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { CreateQuestionDto } from './dto/question.dto';
import { QuestionService } from './questions.service';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Get()
  async findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.questionService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateQuestionDto: CreateQuestionDto) {
    return this.questionService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.questionService.remove(id);
  }
}
