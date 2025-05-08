import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IContinent } from '@shared/regatta'

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrl: './continent.component.scss',
})
export class ContinentComponent {
  displayedColumns: string[] = ['id', 'name', 'code', 'actions'];
  dataSource = new MatTableDataSource<IContinent>(ELEMENT_DATA);

}

const ELEMENT_DATA: IContinent[] = [
  {
    "id": 1,
    "name": "Africa",
    "code": "AF"
  },
  {
    "id": 2,
    "name": "Asia",
    "code": "AS"
  },
  {
    "id": 3,
    "name": "Europe",
    "code": "EU"
  },
  {
    "id": 4,
    "name": "North America",
    "code": "NA"
  },
  {
    "id": 5,
    "name": "Central America",
    "code": "CA"
  },
  {
    "id": 6,
    "name": "South America",
    "code": "SA"
  },
  {
    "id": 7,
    "name": "Oceania",
    "code": "OC"
  }
];