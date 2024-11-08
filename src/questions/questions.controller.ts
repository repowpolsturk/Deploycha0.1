import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

import { CreateQuestionDto } from './dto/question.dto';

import { Question } from './entity/question.entity';
import { QuestionService } from 'Deploycha/src/questions/questions.service';

@ApiTags('questions')
@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @ApiOperation({ summary: 'Create a new question' })
  @ApiResponse({ status: 201, description: 'The question has been successfully created.', type: Question })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @ApiOperation({ summary: 'Get all questions' })
  @ApiResponse({ status: 200, description: 'Return all questions.', type: [Question] })
  @Get()
  async findAll() {
    return this.questionService.findAll();
  }

  @ApiOperation({ summary: 'Get a question by ID' })
  @ApiParam({ name: 'id', description: 'ID of the question', example: 1 })
  @ApiResponse({ status: 200, description: 'Return a single question.', type: Question })
  @ApiResponse({ status: 404, description: 'Question not found.' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.questionService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a question by ID' })
  @ApiParam({ name: 'id', description: 'ID of the question to update', example: 1 })
  @ApiBody({ type: CreateQuestionDto })
  @ApiResponse({ status: 200, description: 'The question has been successfully updated.', type: Question })
  @ApiResponse({ status: 404, description: 'Question not found.' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateQuestionDto: CreateQuestionDto) {
    return this.questionService.update(id, updateQuestionDto);
  }

  @ApiOperation({ summary: 'Delete a question by ID' })
  @ApiParam({ name: 'id', description: 'ID of the question to delete', example: 1 })
  @ApiResponse({ status: 200, description: 'The question has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Question not found.' })
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.questionService.remove(id);
  }
}
