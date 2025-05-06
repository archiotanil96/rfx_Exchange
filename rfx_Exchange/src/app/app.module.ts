import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient , HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './authenticators/dummy-backend';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { ErrorInterceptor,BasicAuthInterceptor} from './authenticators';
import { XchangeLoginComponent } from "./rfxChange/components/login-xchange/xchange-login/xchange-login.component";
import { XchangeNavigationStaticComponent } from "./shared/layout/navigation/xchange-navigation/xchange-navigation-static.component";
import { XchangeVerificationEventsModule } from './rfxChange/components/xchange-vrs-main/xchange-verification-events/xchange-verification-events.module';
import { XchangeVrsVerificationEventsStatusModalComponent } from "./rfxChange/modals/xchange-vrs-verification-events-status-modal/xchange-vrs-verification-events-status-modal.component";
import { XchangeVrsVerificationEventsStatusModalModule } from './rfxChange/modals/xchange-vrs-verification-events-status-modal/xchange-vrs-verification-events-status-modal.module';
import { XchangeVrsRecordsManagementComponent } from "./rfxChange/components/xchange-vrs-main/xchange-vrs-records-management/xchange-vrs-records-management.component";
import { XchangeVrsRecordsManagementModule } from './rfxChange/components/xchange-vrs-main/xchange-vrs-records-management/xchange-vrs-records-management.module';

@NgModule({
    imports: [
    BrowserModule,
    ReactiveFormsModule,
    appRoutingModule,
    XchangeLoginComponent,
    XchangeVerificationEventsModule,
    XchangeNavigationStaticComponent,
    XchangeVrsVerificationEventsStatusModalComponent,
    XchangeVrsVerificationEventsStatusModalModule,
    XchangeVrsRecordsManagementComponent,
    XchangeVrsRecordsManagementModule
],
    declarations: [
        AppComponent,
        
    ],
    providers: [
        provideHttpClient(),
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }