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
  openSidebar: boolean = true;
  menuSidebar = [{link_name:"Dashboard",link:"/dashboard",icon:"bx bx-dashboard",sub_menu:[]},
                 {link_name:"VRS",link:"/vrs_management",icon:"bx bx-collection",sub_menu:[
                  {link_name:"VRS Dashboard",link:"vrs_dashboard"},
                  {link_name:"Verification Events",link:"/verification_events"},
                  {link_name:"VRS Partners",link:"/vrs_partners"},
                  {link_name:"Records Management",link:"/records_management"},
                  {link_name:"Pull Records",link:"/pull_records"},
                  {link_name:"Push Records",link:"/push_records"},
                  {link_name:"Push/Pull Records",link:"/push_pull_records"}]},
                 {link_name:"User Management",link:"/user_management",icon:"bx bx-book-alt",sub_menu:[]},
                 {link_name:"Enterprise Data",link:"/enterprise_data",icon:"bx bx-pie-chart-alt-2",sub_menu:[]},
                 {link_name:"Connections Summary",link:"/conections_summary",icon:"bx bx-line-chart",sub_menu:[]},
                 {link_name:"Connection Setup",link:"/connection_setup",icon:"bx bx-plug",sub_menu:[]},
                 {link_name:"File Management",link:"/file_management",icon:"bx bx-compass",sub_menu:[]},
                 {link_name:"Certificate Management",link:"/certificate_management",icon:"bx bx-history",sub_menu:[]},
                 {link_name:"Error Management",link:"/error_management",icon:"bx bx-cog",sub_menu:[]},
                 {link_name:"Audit Page",link:"/audit_page",icon:"bx bx-cog",sub_menu:[]},
                 {link_name:"Service Management",link:"/service_management",icon:"bx bx-cog",sub_menu:[]}]
                 

  constructor() {}
 
  ngOnInit() {
    console.log("testing")
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }
}
