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

@NgModule({
    imports: [
    BrowserModule,
    ReactiveFormsModule,
    appRoutingModule,
    XchangeLoginComponent,
    XchangeNavigationStaticComponent
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