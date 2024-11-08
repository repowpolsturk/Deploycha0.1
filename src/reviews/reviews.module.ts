import { Module } from '@nestjs/common';
import { ReviewService } from '../reviews/reviews.service';
import { ReviewController } from '../reviews/reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entity/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewsModule {}
