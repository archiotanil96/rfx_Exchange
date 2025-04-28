import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xchange-verification-details-filter',
  standalone: true,
  imports: [],
  templateUrl: './xchange-verification-details-filter.component.html',
  styleUrl: './xchange-verification-details-filter.component.css'
})


export class XchangeVerificationDetailsFilterComponent implements OnInit{
  openSidebar: boolean = false;

  ngOnInit(): void {
    this.openSidebar;
  }

}
