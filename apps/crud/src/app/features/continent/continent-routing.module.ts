import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentComponent } from './components/continent.component';

const routes: Routes = [{
  path: '', component: ContinentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinentRoutingModule { }
