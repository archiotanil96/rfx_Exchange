import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideHttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';


if ((window as any).ENABLE_PROD_MODE) {
    enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule);