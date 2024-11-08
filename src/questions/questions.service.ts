import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreateQuestionDto } from './dto/question.dto';

import { Question } from './entity/question.entity';
import { QuestionService } from 'Deploycha/src/questions/questions.service';

@ApiTags('Questions')
@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @ApiOperation({ summary: 'Create a new question' })
  @ApiResponse({ status: 201, description: 'The question has been successfully created.', type: Question })
  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @ApiOperation({ summary: 'Get all questions' })
  @ApiResponse({ status: 200, description: 'Return all questions', type: [Question] })
  @Get()
  async findAll() {
    return this.questionService.findAll();
  }

  @ApiOperation({ summary: 'Get a question by ID' })
  @ApiResponse({ status: 200, description: 'Return the question', type: Question })
  @ApiResponse({ status: 404, description: 'Question not found' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.questionService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a question by ID' })
  @ApiResponse({ status: 200, description: 'The question has been successfully updated.', type: Question })
  @ApiResponse({ status: 404, description: 'Question not found' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateQuestionDto: CreateQuestionDto) {
    return this.questionService.update(id, updateQuestionDto);
  }

  @ApiOperation({ summary: 'Delete a question by ID' })
  @ApiResponse({ status: 200, description: 'The question has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Question not found' })
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.questionService.remove(id);
  }
}
export { QuestionService };

