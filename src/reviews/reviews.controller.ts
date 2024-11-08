import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { CreateReviewDto } from './dto/review.dto';
import { ReviewService } from './reviews.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  async findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.reviewService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateReviewDto: CreateReviewDto) {
    return this.reviewService.update(id, updateReviewDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.reviewService.remove(id);
  }
}
