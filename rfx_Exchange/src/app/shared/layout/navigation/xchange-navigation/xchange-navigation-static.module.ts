import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { appRoutingModule } from 'src/app/app.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    appRoutingModule
  ],
  bootstrap:    [AppComponent]
})
export class XchangeNavigationStaticModule { }
