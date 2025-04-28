import { RouterModule, Routes } from '@angular/router';
import { XchangeNavigationStaticComponent } from './shared/layout/navigation/xchange-navigation/xchange-navigation-static.component';

const routes: Routes = [

  { path: 'navigate', component: XchangeNavigationStaticComponent}
];


export const appRoutingModule = RouterModule.forRoot(routes);


