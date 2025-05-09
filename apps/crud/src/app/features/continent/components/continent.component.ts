import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IContinent } from '@shared/regatta'
import { ContinentFacade } from '../store/continent.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrl: './continent.component.scss',
})
export class ContinentComponent implements OnInit {
  continentFacade = inject(ContinentFacade);
  displayedColumns: string[] = ['id', 'name', 'code', 'actions'];
  dataSource$ = this.continentFacade.allContinent$;


  ngOnInit(): void {
    this.continentFacade.init();
  }
}