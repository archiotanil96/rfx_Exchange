import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeForgotPasswordComponent } from '../xchange-forgot-password/xchange-forgot-password.component';

const routes: Routes = [
   { path: 'forgotPassword', component: XchangeForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeLoginRoutingModule { }
