import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVrsRecordsManagementComponent } from './xchange-vrs-records-management.component';
import { XchangeVrsRecordsManagementFilterComponent } from 'src/app/rfxChange/module/xchange-records-management-filter-module/xchange-vrs-records-management-filter.component';


const routes: Routes = [
  {path:'',component:XchangeVrsRecordsManagementComponent},
  {path:'filter',component:XchangeVrsRecordsManagementFilterComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVrsRecordsManagementRoutingModule { }
