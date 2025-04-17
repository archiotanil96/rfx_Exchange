import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginXChangeComponent } from './rfxChange/components/login-xchange/login-xchange.component';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule,LoginXChangeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
