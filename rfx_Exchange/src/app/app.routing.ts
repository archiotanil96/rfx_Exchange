import { RouterModule, Routes } from '@angular/router';
import { XchangeNavigationStaticComponent } from './shared/layout/navigation/xchange-navigation/xchange-navigation-static.component';
import { XchangeNavigationStaticRoutingModule } from './shared/layout/navigation/xchange-navigation/xchange-navigation-static-routing.module';
import { XchangeDashboardComponent } from './rfxChange/components/xchange-dashboard/xchange-dashboard.component';
import { XchangeVrsDashboardComponent } from './rfxChange/components/xchange-vrs-main/xchange-vrs-dashboard/xchange-vrs-dashboard.component';
import { XchangeVerificationEventsComponent } from './rfxChange/components/xchange-vrs-main/xchange-verification-events/xchange-verification-events.component';
import { XchangeVrsPartnersComponent } from './rfxChange/components/xchange-vrs-main/xchange-vrs-partners/xchange-vrs-partners.component';
import { XchangeVrsRecordsManagementComponent } from './rfxChange/components/xchange-vrs-main/xchange-vrs-records-management/xchange-vrs-records-management.component';
import { XchangeVrsPullRecordsComponent } from './rfxChange/components/xchange-vrs-main/xchange-vrs-pull-records/xchange-vrs-pull-records.component';
import { XchangeVrsPushRecordsComponent } from './rfxChange/components/xchange-vrs-main/xchange-vrs-push-records/xchange-vrs-push-records.component';
import { XchangeVrsPushPullAnalyticsComponent } from './rfxChange/components/xchange-vrs-main/xchange-vrs-push-pull-analytics/xchange-vrs-push-pull-analytics.component';
import { XchangeUserManagementComponent } from './rfxChange/components/xchange-user-management/xchange-user-management.component';
import { XchangeEnterpriseDataComponent } from './rfxChange/components/xchange-enterprise-data/xchange-enterprise-data.component';
import { XchangeConnectionsSummaryComponent } from './rfxChange/components/xchange-connections-summary/xchange-connections-summary.component';
import { XchangeConnectionSetupComponent } from './rfxChange/components/xchange-connection-setup/xchange-connection-setup.component';
import { XchangeFileManagementComponent } from './rfxChange/components/xchange-file-management/xchange-file-management.component';
import { XchangeCertificateManagementComponent } from './rfxChange/components/xchange-certificate-management/xchange-certificate-management.component';
import { XchangeErrorManagementComponent } from './rfxChange/components/xchange-error-management/xchange-error-management.component';
import { XchangeAuditPageComponent } from './rfxChange/components/xchange-audit-page/xchange-audit-page.component';
import { XchangeServiceManagementComponent } from './rfxChange/components/xchange-service-management/xchange-service-management.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: XchangeDashboardComponent },
  { path: 'vrsdashboard', component: XchangeVrsDashboardComponent },
  { path: 'verification-events', component: XchangeVerificationEventsComponent },
  { path: 'partners', component: XchangeVrsPartnersComponent },
  { path: 'records-management', component: XchangeVrsRecordsManagementComponent },
  { path: 'pull-records', component: XchangeVrsPullRecordsComponent },
  { path: 'push-records', component: XchangeVrsPushRecordsComponent },
  { path: 'analytics', component: XchangeVrsPushPullAnalyticsComponent },
  { path: 'user-management', component: XchangeUserManagementComponent },
  { path: 'enterprise-data', component: XchangeEnterpriseDataComponent },
  { path: 'connections-summary', component: XchangeConnectionsSummaryComponent },
  { path: 'connection-setup', component: XchangeConnectionSetupComponent },
  { path: 'file-management', component: XchangeFileManagementComponent },
  { path: 'certificate-management', component: XchangeCertificateManagementComponent },
  { path: 'error-management', component: XchangeErrorManagementComponent },
  { path: 'audit-page', component: XchangeAuditPageComponent },
  { path: 'service-management', component: XchangeServiceManagementComponent },

  { path: '**', redirectTo: '/dashboard' }
];


export const appRoutingModule = RouterModule.forRoot(routes);


