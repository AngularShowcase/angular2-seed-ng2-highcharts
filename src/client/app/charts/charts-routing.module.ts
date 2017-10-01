import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'charts', component: ChartsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
