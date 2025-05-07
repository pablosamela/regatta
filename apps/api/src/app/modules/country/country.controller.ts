import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CountryService } from './country.service';
import { Country } from './entities/country.entity';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() country: Country) {
    return this.countryService.create(country);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() country: Country
  ) {
    return this.countryService.update(+id, country);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
