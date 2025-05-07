import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ContinentsModule } from './modules/continents/continents.module';
import { Continent } from './modules/continents/entities/continent.entity';
import { CountryModule } from './modules/country/country.module';
import { Country } from './modules/country/entities/country.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Continent, Country],
      synchronize: true,
    }),
  ContinentsModule,
  CountryModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
