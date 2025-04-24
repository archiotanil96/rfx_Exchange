import { RouterModule, Routes } from '@angular/router';
import { XchangeLoginComponent } from './rfxChange/components/login-xchange/xchange-login/xchange-login.component';
import { XchangeForgotPasswordComponent } from './rfxChange/components/login-xchange/xchange-forgot-password/xchange-forgot-password.component';
import { AuthGuard } from './authenticators';
import { XchangeNavigationStaticComponent } from './shared/layout/navigation/xchange-navigation/xchange-navigation-static.component';

const routes: Routes = [

  { path: 'navigate', component: XchangeNavigationStaticComponent}
];


export const appRoutingModule = RouterModule.forRoot(routes);


