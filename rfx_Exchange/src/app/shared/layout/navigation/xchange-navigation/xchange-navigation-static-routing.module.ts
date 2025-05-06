import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeDashboardComponent } from 'src/app/rfxChange/components/xchange-dashboard/xchange-dashboard.component';
import { XchangeVerificationEventsComponent } from 'src/app/rfxChange/components/xchange-vrs-main/xchange-verification-events/xchange-verification-events.component';
import { XchangeVrsDashboardComponent } from 'src/app/rfxChange/components/xchange-vrs-main/xchange-vrs-dashboard/xchange-vrs-dashboard.component';
import { XchangeVrsPartnersComponent } from 'src/app/rfxChange/components/xchange-vrs-main/xchange-vrs-partners/xchange-vrs-partners.component';
import { XchangeVrsPullRecordsComponent } from 'src/app/rfxChange/components/xchange-vrs-main/xchange-vrs-pull-records/xchange-vrs-pull-records.component';
import { XchangeVrsPushPullAnalyticsComponent } from 'src/app/rfxChange/components/xchange-vrs-main/xchange-vrs-push-pull-analytics/xchange-vrs-push-pull-analytics.component';
import { XchangeVrsPushRecordsComponent } from 'src/app/rfxChange/components/xchange-vrs-main/xchange-vrs-push-records/xchange-vrs-push-records.component';
import { XchangeVrsRecordsManagementComponent } from 'src/app/rfxChange/components/xchange-vrs-main/xchange-vrs-records-management/xchange-vrs-records-management.component';


const routes: Routes = [
  { path: 'dashboard', component: XchangeDashboardComponent },
  { path: 'vrs/dashboard', component: XchangeVrsDashboardComponent },
  { path: 'vrs/verification-events', component: XchangeVerificationEventsComponent },
  { path: 'vrs/partners', component: XchangeVrsPartnersComponent },
  { path: 'vrs/records-management', component: XchangeVrsRecordsManagementComponent },
  { path: 'vrs/pull-records', component: XchangeVrsPullRecordsComponent },
  { path: 'vrs/push-records', component: XchangeVrsPushRecordsComponent },
  { path: 'vrs/analytics', component: XchangeVrsPushPullAnalyticsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeNavigationStaticRoutingModule { }
