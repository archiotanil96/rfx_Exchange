import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVrsDashboardComponent } from './xchange-vrs-dashboard.component';

const routes: Routes = [
  {path:'',component:XchangeVrsDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVrsDashboardRoutingModule { }
