import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'vrs_dashboard',
    loadChildren: () => import('./xchange-vrs-dashboard/xchange-vrs-dashboard.module').then(m => m.XchangeVrsDashboardModule),
    },
  {
    path: 'vrs_verification_events',
    loadChildren: () => import('./xchange-verification-events/xchange-verification-events.module').then(m => m.XchangeVerificationEventsModule),
  },
  {
    path: 'vrs_partners',
    loadChildren: () => import('./xchange-vrs-partners/xchange-vrs-partners.module').then(m => m.XchangeVrsPartnersModule),
  },
  {
    path: 'vrs_records_management',
    loadChildren: () => import('./xchange-vrs-records-management/xchange-vrs-records-management.module').then(m => m.XchangeVrsRecordsManagementModule),
  },
  {
    path: 'vrs_pull_records',
    loadChildren: () => import('./xchange-vrs-pull-records/xchange-vrs-pull-records.module').then(m => m.XchangeVrsPullRecordsModule),
  },
  {
    path: 'vrs_push_records',
    loadChildren: () => import('./xchange-vrs-push-records/xchange-vrs-push-records.module').then(m => m.XchangeVrsPushRecordsModule),
  },
  {
    path: 'vrs_push_pull_records',
    loadChildren: () => import('./xchange-vrs-push-pull-analytics/xchange-vrs-push-pull-analytics.module').then(m => m.XchangeVrsPushPullAnalyticsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVrsMainPageRoutingModule { }
