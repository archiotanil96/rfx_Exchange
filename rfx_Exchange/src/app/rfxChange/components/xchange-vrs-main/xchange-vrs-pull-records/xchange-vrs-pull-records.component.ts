import { Component, OnInit,OnDestroy, ViewChild, ViewContainerRef, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import {
  CellStyleModule,
  ClientSideRowModelModule,
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  ModuleRegistry,
  ValidationModule,
  createGrid,
} from "ag-grid-community";
import { XchangeVrsRecordsManagementFilterComponent } from "../../../module/xchange-records-management-filter-module/xchange-vrs-records-management-filter.component";
import { XchangeVrsRecordsManagementModalComponent } from "../../../modals/xchange-vrs-records-management-modal/xchange-vrs-records-management-modal.component"
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/services/authServices/closeModalService';


@Component({
  selector: 'app-xchange-vrs-pull-records',
  standalone: true,
  imports: [],
  templateUrl: './xchange-vrs-pull-records.component.html',
  styleUrl: './xchange-vrs-pull-records.component.css'
})
export class XchangeVrsPullRecordsComponent implements OnInit,OnDestroy{
  @ViewChild('recordsFilterContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild(XchangeVrsRecordsManagementModalComponent) modalComponent!: XchangeVrsRecordsManagementModalComponent; 
  showFilter:boolean = false;
  showModal:boolean  = false;  
  isVisible:boolean  = true;
  modalData: any;
  message:any;
  closeModalSubscription: Subscription | undefined;
  parentRowData: any;


  private gridInstance!: { api: GridApi; columnApi: any };
  private gridApi!:GridApi;


  checkboxCol: ColDef = {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    field: 'select',
    width: 50,
    pinned: 'left',
  };
  

  constructor(private router: Router,private eventService: EventService) {}
    showChildComponent = false;
    rowData:any = [
    { id: 1, guid: "01231-09832-d2", vrs: "MedKeeper", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:22 AM", modified: "01-21-2025 / 10:22 AM",view:"1" },
    { id: 2, guid: "01231-09832-d3", vrs: "TrackLink", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:33 AM", modified: "01-21-2025 / 10:33 AM" },
    { id: 3, guid: "01231-09832-d4", vrs: "Jeison", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 09:29 AM", modified: "01-21-2025 / 09:29 AM" },
    { id: 4, guid: "01231-09832-d5", vrs: "Track/Tracklib", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 08:52 AM", modified: "01-21-2025 / 08:52 AM" },
    { id: 5, guid: "01231-09832-d6", vrs: "OpNet", gtin: "1621023456789", status: "Inactive", labeler: "M92375", created: "01-21-2025 / 09:30 AM", modified: "01-21-2025 / 09:30 AM" },
    { id: 6, guid: "01231-09832-d7", vrs: "MedKeeper", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 11:02 AM", modified: "01-21-2025 / 11:02 AM" },
    { id: 7, guid: "01231-09832-d8", vrs: "Jeison", gtin: "1621023456789", status: "Inactive", labeler: "M64921", created: "01-21-2025 / 08:25 AM", modified: "01-21-2025 / 08:25 AM" },
    { id: 8, guid: "01231-09832-d9", vrs: "Track/Tracklib", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:22 AM", modified: "01-21-2025 / 10:22 AM" },
    { id: 9, guid: "01231-09832-d10", vrs: "Movilink Cloud", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:23 AM", modified: "01-21-2025 / 10:23 AM" },
    { id: 10, guid: "01231-09832-d11", vrs: "Jeison", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:24 AM", modified: "01-21-2025 / 10:24 AM" },
    { id: 11, guid: "01231-09832-d2", vrs: "MedKeeper", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:22 AM", modified: "01-21-2025 / 10:22 AM" },
    { id: 12, guid: "01231-09832-d3", vrs: "TrackLink", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:33 AM", modified: "01-21-2025 / 10:33 AM" },
    { id: 13, guid: "01231-09832-d4", vrs: "Jeison", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 09:29 AM", modified: "01-21-2025 / 09:29 AM" },
    { id: 14, guid: "01231-09832-d5", vrs: "Track/Tracklib", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 08:52 AM", modified: "01-21-2025 / 08:52 AM" },
    { id: 15, guid: "01231-09832-d6", vrs: "OpNet", gtin: "1621023456789", status: "Inactive", labeler: "M92375", created: "01-21-2025 / 09:30 AM", modified: "01-21-2025 / 09:30 AM" },
    { id: 16, guid: "01231-09832-d7", vrs: "MedKeeper", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 11:02 AM", modified: "01-21-2025 / 11:02 AM" },
    { id: 17, guid: "01231-09832-d8", vrs: "Jeison", gtin: "1621023456789", status: "Inactive", labeler: "M64921", created: "01-21-2025 / 08:25 AM", modified: "01-21-2025 / 08:25 AM" },
    { id: 18, guid: "01231-09832-d9", vrs: "Track/Tracklib", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:22 AM", modified: "01-21-2025 / 10:22 AM" },
    { id: 19, guid: "01231-09832-d10", vrs: "Movilink Cloud", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:23 AM", modified: "01-21-2025 / 10:23 AM" },
    { id: 20, guid: "01231-09832-d11", vrs: "Jeison", gtin: "1621023456789", status: "Active", labeler: "M64921", created: "01-21-2025 / 10:24 AM", modified: "01-21-2025 / 10:24 AM" },
  ];

  gridOptions:any = {
    columnDefs: [
      { field: "id", headerName: "ID", filter: false, width: 70,headerClass: 'customheader' },
      { field: "guid", headerName: "GUID", filter: false,width: 200,headerClass: 'customheader'  },
      { field: "vrs", headerName: "VRS Partner", filter: false,width: 200,headerClass: 'customheader' },
      { field: "gtin", headerName: "GTIN", filter: false,headerClass: 'customheader'  },
      {
        field: "status", headerName: "Status",width: 150,headerClass: 'customheader' ,filter: false,
        cellRenderer: (params:any) => {
          const cls = params.value === "Active" ? "status-active" : "status-inactive";
          if(params.value === "Active")
          {
            return `<span class="${cls}">${params.value}&nbsp;&nbsp<i class="fa fa-check-circle" aria-hidden="true"></i></span>`;
          }
          else
          {
            return `<span class="${cls}">${params.value}&nbsp;&nbsp<i class="fa fa-ban" aria-hidden="true"></i></span>`;
          }
        }
      },
      { field: "labeler", headerName: "Labeler Code", width: 150,filter: false ,headerClass: 'customheader' },
      { field: "created", headerName: "Created Date/Time",  width: 250,filter: false ,headerClass: 'customheader' },
      { field: "modified", headerName: "Modified Date/Time",filter: false ,headerClass: 'customheader' },
      { field: "view", headerName: "", filter:false,width: 50,headerClass: 'customheader',
        cellRenderer: (params: any) => {
          return `<div class="custom-cell-border">
                    &nbsp;&nbsp;<i class="fa fa-eye eye-icon" ng-model="hideMainContent" aria-hidden="true"></i>
                  </div>`;
        },
        onCellClicked: (params: any) => {
          if (params.event.target.classList.contains('eye-icon')) {
            this.openFilterModal(params.data);
          }
        }
       }
    ],
    rowData: this.rowData,
    rowHeight: 53,
    rowSelection: 'none',
    rowStyle: { fontFamily: 'National Park', fontSize: '13px',rowGap:'10px'},
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true
    },
    pagination: true,
    paginationPageSize: 20
  };




  ngOnInit(): void {
    
    const gridDiv = document.querySelector<HTMLElement>('#pushGrid')!;
    (this.gridInstance as any)= createGrid(gridDiv, this.gridOptions);
    this.gridApi = this.gridInstance.api;
    this.closeModalSubscription = this.eventService.closeModalEvent.subscribe(() => {
      this.showModal = false;
    });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.closeModalSubscription) {
      this.closeModalSubscription.unsubscribe();
    }
  }

  recordsManagementFilter() {
    this.showFilter = true;
    console.log("check",this.showFilter);
  };


  openFilterModal(data: any)
  {
    this.showModal       = true;
    this.modalData       = data;
    this.parentRowData   = this.modalData;
    console.log("Opening Modal", data, this.showModal);
  }


}
