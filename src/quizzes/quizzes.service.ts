import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateQuizDto } from './dto/quiz.dto';
import { Quiz } from './entity/quizzes.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    const quiz = this.quizRepository.create(createQuizDto);
    return this.quizRepository.save(quiz);
  }

  async findAll(): Promise<Quiz[]> {
    return this.quizRepository.find();
  }

  async findOne(id: number): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne({ where: { id } });
    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
    return quiz;
  }

  async update(id: number, updateQuizDto: CreateQuizDto): Promise<Quiz> {
    await this.quizRepository.update(id, updateQuizDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const quiz = await this.findOne(id);
    if (quiz) {
      await this.quizRepository.delete(id);
    }
  }
}
