import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVerificationEventsComponent } from 'src/app/rfxChange/components/xchange-vrs-main/xchange-verification-events/xchange-verification-events.component';
import { XchangeAuditPageComponent } from 'src/app/rfxChange/components/xchange-audit-page/xchange-audit-page.component';
import { XchangeCertificateManagementComponent } from 'src/app/rfxChange/components/xchange-certificate-management/xchange-certificate-management/xchange-certificate-management.component';
import { XchangeConnectionSetupComponent } from 'src/app/rfxChange/components/xchange-connection-setup/xchange-connection-setup.component';
import { XchangeConnectionsSummaryComponent } from 'src/app/rfxChange/components/xchange-connections-summary/xchange-connections-summary.component';
import { XchangeDashboardComponent } from 'src/app/rfxChange/components/xchange-dashboard/xchange-dashboard.component';
import { XchangeEnterpriseDataComponent } from 'src/app/rfxChange/components/xchange-enterprise-data/xchange-enterprise-data.component';
import { XchangeErrorManagementComponent } from 'src/app/rfxChange/components/xchange-error-management/xchange-error-management.component';
import { XchangeFileManagementComponent } from 'src/app/rfxChange/components/xchange-file-management/xchange-file-management.component';
import { XchangeServiceManagementComponent } from 'src/app/rfxChange/components/xchange-service-management/xchange-service-management.component';
import { XchangeUserManagementComponent } from 'src/app/rfxChange/components/xchange-user-management/xchange-user-management.component';

const routes: Routes = [
  { path: 'vrs_management', component:XchangeVerificationEventsComponent},
  { path: 'user_management', component:XchangeUserManagementComponent},
  { path: 'enterprise_data', component:XchangeEnterpriseDataComponent},
  { path: 'conections_summary', component:XchangeConnectionsSummaryComponent},
  { path: 'connection_setup', component:XchangeConnectionSetupComponent},
  { path: 'file_management', component:XchangeFileManagementComponent},
  { path: 'certificate_management', component:XchangeCertificateManagementComponent},
  { path: 'error_management', component:XchangeErrorManagementComponent},
  { path: 'audit_page', component:XchangeAuditPageComponent},
  { path: 'service_management', component:XchangeServiceManagementComponent},

  { path: 'dashboard', component:XchangeDashboardComponent},
  
  { path: 'vrs_dashboard', component:XchangeDashboardComponent},
  { path: 'vrs_verification_events', component:XchangeVerificationEventsComponent},
  { path: 'vrs_partners', component:XchangeUserManagementComponent},
  { path: 'vrs_pull_records', component:XchangeEnterpriseDataComponent},
  { path: 'vrs_push_records', component:XchangeConnectionsSummaryComponent},
  { path: 'vrs_push_pull_records', component:XchangeConnectionsSummaryComponent},
  { path: 'vrs_records_management', component:XchangeConnectionsSummaryComponent},

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeNavigationStaticRoutingModule { }
