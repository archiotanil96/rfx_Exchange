import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XchangeVrsPushRecordsModalModule } from "../../../modals/xchange-vrs-push-modal/xchange-vrs-push-records-modal.module";

import { XchangeVrsPushRecordsRoutingModule } from './xchange-vrs-push-records-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    XchangeVrsPushRecordsModalModule,
    XchangeVrsPushRecordsRoutingModule
  ]
})
export class XchangeVrsPushRecordsModule { }
