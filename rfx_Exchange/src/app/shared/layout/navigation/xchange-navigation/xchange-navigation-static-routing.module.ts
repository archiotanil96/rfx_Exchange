import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },
  {
    path: "VRS__Main",
    loadChildren: () => import('../../../../rfxChange/components/xchange-vrs-main/xchange-vrs-main-page.module').then(m => m.XchangeVrsMainPageModule),
    data: { pageTitle: "Analytics" }
  },

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeNavigationStaticRoutingModule { }
