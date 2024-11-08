import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTypeDto } from './dto/type.dto';
import { Type } from './entity/type.entity';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private typeRepository: Repository<Type>,
  ) {}

  async create(createTypeDto: CreateTypeDto): Promise<Type> {
    const type = this.typeRepository.create(createTypeDto);
    return this.typeRepository.save(type);
  }

  async findAll(): Promise<Type[]> {
    return this.typeRepository.find();
  }

  async findOne(id: number): Promise<Type> {
    const type = await this.typeRepository.findOne({ where: { id } });
    if (!type) {
      throw new NotFoundException(`Type with ID ${id} not found`);
    }
    return type;
  }

  async update(id: number, updateTypeDto: CreateTypeDto): Promise<Type> {
    await this.typeRepository.update(id, updateTypeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const type = await this.findOne(id);
    if (type) {
      await this.typeRepository.delete(id);
    }
  }
}
