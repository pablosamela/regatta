import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ContinentRoutingModule } from './continent-routing.module';
import { ContinentComponent } from './components/continent.component';
import { MatButton } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromContinent from './store/continent.reducer';
import { ContinentEffects } from './store/continent.effects';
import { ContinentFacade } from './store/continent.facade';

@NgModule({
  declarations: [ContinentComponent],
  imports: [
    CommonModule,
    ContinentRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    StoreModule.forFeature(
      fromContinent.CONTINENT_FEATURE_KEY,
      fromContinent.continentReducer
    ),
    EffectsModule.forFeature([ContinentEffects]),
  ],
  providers: [ContinentFacade],
})
export class ContinentModule {}
