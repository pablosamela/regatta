import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ContinentRoutingModule } from './continent-routing.module';
import { ContinentComponent } from './continent.component';
import { MatButton } from '@angular/material/button';

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
  ],
})
export class ContinentModule {}
