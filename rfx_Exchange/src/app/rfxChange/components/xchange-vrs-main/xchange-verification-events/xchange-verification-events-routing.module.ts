import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVerificationEventsComponent } from './xchange-verification-events.component';

const routes: Routes = [
  {
    path: '',
    component: XchangeVerificationEventsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVerificationEventsRoutingModule { }
