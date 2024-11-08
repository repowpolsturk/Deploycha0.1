import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateAnswerDto } from './dto/answer.dto';
import { AnswerService } from './answers.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'; // Импортируем декораторы Swagger

@ApiTags('Answers') // Указываем тег для группы эндпоинтов в документации Swagger
@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new answer' }) // Описание операции
  @ApiBody({ type: CreateAnswerDto }) // Описание тела запроса
  @ApiResponse({ status: 201, description: 'The answer has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(createAnswerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all answers' }) // Описание операции
  @ApiResponse({ status: 200, description: 'List of all answers' })
  async findAll() {
    return this.answerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific answer by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the answer' }) // Описание параметра URL
  @ApiResponse({ status: 200, description: 'The answer found.' })
  @ApiResponse({ status: 404, description: 'Answer not found.' })
  async findOne(@Param('id') id: number) {
    return this.answerService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an answer' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the answer to update' })
  @ApiBody({ type: CreateAnswerDto }) // Описание тела запроса для обновления
  @ApiResponse({ status: 200, description: 'The answer has been successfully updated.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async update(@Param('id') id: number, @Body() updateAnswerDto: CreateAnswerDto) {
    return this.answerService.update(id, updateAnswerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an answer by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the answer to delete' })
  @ApiResponse({ status: 200, description: 'The answer has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Answer not found.' })
  async remove(@Param('id') id: number) {
    return this.answerService.remove(id);
  }
}
