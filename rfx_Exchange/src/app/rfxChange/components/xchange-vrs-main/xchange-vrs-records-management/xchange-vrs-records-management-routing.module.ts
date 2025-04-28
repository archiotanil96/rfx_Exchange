import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVrsRecordsManagementComponent } from './xchange-vrs-records-management.component';


const routes: Routes = [
  {path:'',component:XchangeVrsRecordsManagementComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVrsRecordsManagementRoutingModule { }
