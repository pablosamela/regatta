import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {

  constructor(
    @InjectRepository(Country)
    private readonly repository: Repository<Country>
  ){}

  async create(country: Country): Promise<Country> {
    const newEntity = this.repository.create(country);
    return await this.repository.save(newEntity);
  }

  async findAll(): Promise<Country[]>  {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Country>  {
    return await this.repository.findOne({ 
      where: [{id}]
    });
  }

  async update(id: number, country: Country): Promise<UpdateResult> {
    return await this.repository.update(id, country);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
