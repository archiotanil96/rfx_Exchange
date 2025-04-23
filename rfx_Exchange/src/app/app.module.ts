import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient , HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './authenticators/dummy-backend';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { ErrorInterceptor,BasicAuthInterceptor} from './authenticators';
import { XchangeForgotPasswordComponent } from './rfxChange/components/login-xchange/xchange-forgot-password/xchange-forgot-password.component';
import { XchangeLoginComponent } from './rfxChange/components/login-xchange/xchange-login/xchange-login.component';
import { XchangeDashboardComponent } from './rfxChange/components/vrsMain/xchange-vrs-dashboard/xchange-dashboard/xchange-dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        appRoutingModule,
        XchangeForgotPasswordComponent,
        XchangeLoginComponent,
        XchangeDashboardComponent
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