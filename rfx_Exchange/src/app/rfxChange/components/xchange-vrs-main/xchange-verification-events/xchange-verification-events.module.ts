import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
ModuleRegistry.registerModules([AllCommunityModule]);
import { XchangeVerificationEventsRoutingModule } from './xchange-verification-events-routing.module';
import { XchangeVrsVerificationEventsStatusModalModule } from 'src/app/rfxChange/modals/xchange-vrs-verification-events-status-modal/xchange-vrs-verification-events-status-modal.module';
import { XchangeVrsVerificationEventsStatusModalComponent } from 'src/app/rfxChange/modals/xchange-vrs-verification-events-status-modal/xchange-vrs-verification-events-status-modal.component';
import { XchangeVrsRecordsManagementComponent } from '../xchange-vrs-records-management/xchange-vrs-records-management.component';
import { XchangeVrsRecordsManagementModule } from '../xchange-vrs-records-management/xchange-vrs-records-management.module';
import { XchangeVrsRecordsManagementModalModule } from 'src/app/rfxChange/modals/xchange-vrs-records-management-modal/xchange-vrs-records-management-modal.module';
import { XchangeVrsRecordsManagementModalComponent } from 'src/app/rfxChange/modals/xchange-vrs-records-management-modal/xchange-vrs-records-management-modal.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    XchangeVerificationEventsRoutingModule,
    XchangeVrsVerificationEventsStatusModalModule,
    XchangeVrsVerificationEventsStatusModalComponent,
    XchangeVrsRecordsManagementModule,
    XchangeVrsRecordsManagementComponent,
    XchangeVrsRecordsManagementModalModule,
    XchangeVrsRecordsManagementModalComponent

  ]
})
export class XchangeVerificationEventsModule { }
