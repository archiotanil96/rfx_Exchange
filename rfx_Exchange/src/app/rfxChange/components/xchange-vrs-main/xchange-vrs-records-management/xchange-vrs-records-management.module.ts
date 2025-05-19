import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XchangeVrsRecordsManagementFilterModule } from 'src/app/rfxChange/module/xchange-records-management-filter-module//xchange-vrs-records-management-filter.module';
import { XchangeVrsRecordsManagementRoutingModule } from './xchange-vrs-records-management-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    XchangeVrsRecordsManagementFilterModule,
    XchangeVrsRecordsManagementRoutingModule,
    
  ]
})
export class XchangeVrsRecordsManagementModule { }
