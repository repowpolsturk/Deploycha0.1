import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultService } from '../results/results.service';
import { ResultController } from '../results/results.controller';
import { Result } from './entity/result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Result])], 
  controllers: [ResultController],  
  providers: [ResultService],  
})
export class ResultsModule {}
