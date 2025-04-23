import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XchangeLoginRoutingModule } from './xchange-login-routing.module';
import { AuthenticationService } from 'src/app/services/authServices/authentication.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    XchangeLoginRoutingModule
  ],
  providers:[AuthenticationService]
})
export class XchangeLoginModule { }
