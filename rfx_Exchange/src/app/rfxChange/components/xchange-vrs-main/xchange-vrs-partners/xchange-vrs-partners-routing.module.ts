import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XchangeVrsPartnersComponent } from './xchange-vrs-partners.component';

const routes: Routes = [
  {path:'',component:XchangeVrsPartnersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XchangeVrsPartnersRoutingModule { }
