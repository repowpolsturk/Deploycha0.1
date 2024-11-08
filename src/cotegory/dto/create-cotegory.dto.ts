import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'; // Swagger аннотации
import { CreateCategoryDto } from 'Deploycha/src/cotegory/dto/cotegory.dto';

@ApiTags('Categories') // Группа эндпоинтов
@Controller('categories')
export class CategoryController {
  constructor(/* Category Service Dependency */) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' }) // Краткое описание метода
  @ApiBody({ type: CreateCategoryDto }) // Тело запроса (DTO)
  @ApiResponse({ status: 201, description: 'Category created successfully' }) // Успешный ответ
  @ApiResponse({ status: 400, description: 'Invalid input data' }) // Ошибка ввода
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    // Logic to create category
    return /* создание категории */;
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, description: 'List of categories' })
  async findAll() {
    // Logic to find all categories
    return /* список категорий */;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a category by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the category' })
  @ApiResponse({ status: 200, description: 'Category found' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  async findOne(@Param('id') id: number) {
    // Logic to find category by ID
    return /* категория по ID */;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a category' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the category to update' })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({ status: 200, description: 'Category updated successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async update(@Param('id') id: number, @Body() updateCategoryDto: CreateCategoryDto) {
    // Logic to update category by ID
    return /* обновление категории */;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a category by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the category to delete' })
  @ApiResponse({ status: 200, description: 'Category deleted successfully' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  async remove(@Param('id') id: number) {
    // Logic to delete category by ID
    return /* удаление категории */;
  }
}
