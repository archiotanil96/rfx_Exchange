import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XchangeLoginRoutingModule } from './xchange-login-routing.module';
/* prime ng modules*/
import { ButtonModule } from 'primeng/button';
import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    XchangeLoginRoutingModule,
    ButtonModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({ 
        theme: {
            preset: Aura
        }
    })
]
})
export class XchangeLoginModule { }
