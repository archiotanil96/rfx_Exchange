import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { XchangeNavigationStaticRoutingModule } from './xchange-navigation-static-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
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
import { XchangeNavigationStaticComponent } from './xchange-navigation-static.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    XchangeNavigationStaticRoutingModule,
    XchangeNavigationStaticComponent,
    XchangeAuditPageComponent,
    XchangeConnectionSetupComponent,
    XchangeVerificationEventsComponent,
    XchangeConnectionsSummaryComponent,
    XchangeDashboardComponent,
    XchangeEnterpriseDataComponent,
    XchangeErrorManagementComponent,
    XchangeFileManagementComponent,
    XchangeServiceManagementComponent,
    XchangeUserManagementComponent,
    XchangeCertificateManagementComponent
  ],
  bootstrap:    [AppComponent]
})
export class XchangeNavigationStaticModule { }
