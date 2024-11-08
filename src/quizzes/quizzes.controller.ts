import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { CreateQuizDto } from './dto/quiz.dto';
import { QuizService } from './quizzes.service';

@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  async findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.quizService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateQuizDto: CreateQuizDto) {
    return this.quizService.update(id, updateQuizDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.quizService.remove(id);
  }
}
