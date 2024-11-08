import { Module } from '@nestjs/common';
import { AnswerService } from './answers.service';
import { AnswerController } from './answers.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; // Импортируем TypeOrmModule
import { Answer } from './entity/answer.entity'; // Импортируем модель Answer

@Module({
  imports: [TypeOrmModule.forFeature([Answer])], // Используем TypeOrmModule вместо SequelizeModule
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswersModule {}
