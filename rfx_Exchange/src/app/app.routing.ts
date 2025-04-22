import { RouterModule, Routes } from '@angular/router';
import { XchangeLoginComponent } from './rfxChange/components/login-xchange/xchange-login/xchange-login.component';
import { XchangeForgotPasswordComponent } from './rfxChange/components/login-xchange/xchange-forgot-password/xchange-forgot-password.component';
import { AuthGuard } from './authenticators';

const routes: Routes = [
  { path: 'login', component: XchangeLoginComponent },
  { path: 'forgotPassword', component: XchangeForgotPasswordComponent,canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login'}
];


export const appRoutingModule = RouterModule.forRoot(routes);


