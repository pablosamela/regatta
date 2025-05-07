import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContinentsService } from './continents.service';
import { Continent } from './entities/continent.entity';

@Controller('continent')
export class ContinentsController {
  constructor(private readonly continentsService: ContinentsService) {}

  @Post()
  create(@Body() createContinent: Continent) {
    return this.continentsService.create(createContinent);
  }

  @Get()
  findAll() {
    return this.continentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.continentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateContinent: Continent
  ) {
    return this.continentsService.update(+id, updateContinent);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.continentsService.remove(+id);
  }
}
