import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVrsPullRecordsComponent } from './xchange-vrs-pull-records.component';

const routes: Routes = [
  {path:'',component:XchangeVrsPullRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVrsPullRecordsRoutingModule { }
