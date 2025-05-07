import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
	code: string;

  @Column()	
	name: string;

  @Column()
	fullName: string; 

  @Column()
	iso3: string;

  @Column()
	number: number;

  @Column()
	continentCode: string;

  @Column()
	order: number;
}
