import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVrsPushPullAnalyticsRoutingModule } from '../xchange-vrs-push-pull-analytics/xchange-vrs-push-pull-analytics-routing.module';

const routes: Routes = [
  {path:'',component:XchangeVrsPushPullAnalyticsRoutingModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVrsPushRecordsRoutingModule { }
