import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Continent } from './entities/continent.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ContinentsService {

  constructor(
    @InjectRepository(Continent)
    private readonly repository: Repository<Continent>
  ) {}

  async create(continent: Continent): Promise<Continent> {
    const newEntity = this.repository.create(continent);
    return await this.repository.save(newEntity);
  }

  async findAll(): Promise<Continent[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Continent>  {
    return await this.repository.findOne({ 
      where: [{id}]
    });
  }

  async update(id: number, continent: Continent): Promise<UpdateResult>  {
    return await this.repository.update(id, continent);
  }

  remove(id: number): Promise<DeleteResult>  {
    return this.repository.delete(id);
  }
}
