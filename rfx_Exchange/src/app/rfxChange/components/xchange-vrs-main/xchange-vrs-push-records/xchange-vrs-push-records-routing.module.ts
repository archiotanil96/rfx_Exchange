import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVrsPushRecordsModule } from './xchange-vrs-push-records.module';
const routes: Routes = [
  {path:'',component:XchangeVrsPushRecordsModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVrsPushRecordsRoutingModule { }
