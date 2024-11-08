import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CategoryService } from 'Deploycha/src/cotegory/cotegory.service';
import { CreateCategoryDto } from 'Deploycha/src/cotegory/dto/cotegory.dto';
import { Category } from './entities/cotegory.entity';

@ApiTags('Categories') // Группа эндпоинтов в Swagger
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' }) // Описание операции
  @ApiBody({ type: CreateCategoryDto }) // Описание тела запроса
  @ApiResponse({ status: 201, description: 'Category created successfully', type: Category }) // Описание успешного ответа
  @ApiResponse({ status: 400, description: 'Invalid input data' }) // Описание ошибки
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' }) // Описание операции
  @ApiResponse({ status: 200, description: 'List of categories', type: [Category] }) // Описание успешного ответа
  async findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a category by ID' }) // Описание операции
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the category' }) // Описание параметра запроса
  @ApiResponse({ status: 200, description: 'Category found', type: Category }) // Описание успешного ответа
  @ApiResponse({ status: 404, description: 'Category not found' }) // Описание ошибки
  async findOne(@Param('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a category' }) // Описание операции
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the category to update' }) // Описание параметра запроса
  @ApiBody({ type: CreateCategoryDto }) // Описание тела запроса
  @ApiResponse({ status: 200, description: 'Category updated successfully', type: Category }) // Описание успешного ответа
  @ApiResponse({ status: 400, description: 'Invalid input data' }) // Описание ошибки
  async update(@Param('id') id: number, @Body() updateCategoryDto: CreateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a category by ID' }) // Описание операции
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the category to delete' }) // Описание параметра запроса
  @ApiResponse({ status: 200, description: 'Category deleted successfully' }) // Описание успешного ответа
  @ApiResponse({ status: 404, description: 'Category not found' }) // Описание ошибки
  async remove(@Param('id') id: number) {
    return this.categoryService.remove(id);
  }
}
export { CategoryService };

