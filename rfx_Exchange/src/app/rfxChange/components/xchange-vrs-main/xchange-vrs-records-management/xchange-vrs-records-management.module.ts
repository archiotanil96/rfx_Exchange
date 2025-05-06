import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XchangeVrsRecordsManagementModalComponent } from 'src/app/rfxChange/modals/xchange-vrs-records-management-modal/xchange-vrs-records-management-modal/xchange-vrs-records-management-modal.component';
import { XchangeVrsRecordsManagementRoutingModule } from './xchange-vrs-records-management-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    XchangeVrsRecordsManagementRoutingModule,
    XchangeVrsRecordsManagementModalComponent
  ]
})
export class XchangeVrsRecordsManagementModule { }
