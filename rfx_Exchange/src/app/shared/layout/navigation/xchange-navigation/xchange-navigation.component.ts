import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-xchange-navigation',
  standalone: true,
  imports: [MatSidenavModule,MatToolbarModule,MatIconModule],
  templateUrl: './xchange-navigation.component.html',
  styleUrl: './xchange-navigation.component.css'
})
export class XchangeNavigationComponent {
  mode = new FormControl('over' as MatDrawerMode);
}
