import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-xchange-navigation-static',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './xchange-navigation-static.component.html',
  styleUrl: './xchange-navigation-static.component.css'
})

export class XchangeNavigationStaticComponent implements OnInit{
  userInitials = 'A'; // You can dynamically set this
  userName = 'Archiot Anil';
  userEmail = 'anilarchiot@rfxcel.com';
  vrsExpanded: boolean = true;
                 

  constructor() {}
 
  ngOnInit() {
    console.log("testing")
  }


  toggleVrsMenu(): void {
    this.vrsExpanded = !this.vrsExpanded;
  }
}
