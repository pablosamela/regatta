import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContinentsService } from './continents.service';
import { ContinentsController } from './continents.controller';
import { Continent } from './entities/continent.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Continent])],
  controllers: [ContinentsController],
  providers: [ContinentsService],
})
export class ContinentsModule {}
