import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVrsPushPullAnalyticsComponent } from './xchange-vrs-push-pull-analytics.component';

const routes: Routes = [
  {path:'',component:XchangeVrsPushPullAnalyticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVrsPushPullAnalyticsRoutingModule { }
