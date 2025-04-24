import { RouterModule, Routes } from '@angular/router';
import { XchangeLoginComponent } from './rfxChange/components/login-xchange/xchange-login/xchange-login.component';
import { XchangeForgotPasswordComponent } from './rfxChange/components/login-xchange/xchange-forgot-password/xchange-forgot-password.component';
import { AuthGuard } from './authenticators';
import { XchangeNavigationStaticModule } from './shared/layout/navigation/xchange-navigation/xchange-navigation-static.module';


export const appRoutingModule = XchangeNavigationStaticModule;


