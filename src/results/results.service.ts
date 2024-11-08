import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateResultDto } from './dto/result.dto';
import { Result } from './entity/result.entity';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result)
    private resultRepository: Repository<Result>,
  ) {}

  async create(createResultDto: CreateResultDto): Promise<Result> {
    const result = this.resultRepository.create(createResultDto);
    return this.resultRepository.save(result);
  }

  async findAll(): Promise<Result[]> {
    return this.resultRepository.find();
  }

  async findOne(id: number): Promise<Result> {
    const result = await this.resultRepository.findOne({ where: { id } });
    if (!result) {
      throw new NotFoundException(`Result with ID ${id} not found`);
    }
    return result;
  }

  async update(id: number, updateResultDto: CreateResultDto): Promise<Result> {
    await this.resultRepository.update(id, updateResultDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.findOne(id);
    if (result) {
      await this.resultRepository.delete(id);
    }
  }
}
