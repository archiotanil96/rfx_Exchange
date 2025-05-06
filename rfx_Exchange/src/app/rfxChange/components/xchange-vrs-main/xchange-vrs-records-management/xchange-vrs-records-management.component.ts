import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef, GridOptions,Theme,themeMaterial } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { XchangeVrsRecordsManagementModalComponent } from "../../../modals/xchange-vrs-records-management-modal/xchange-vrs-records-management-modal/xchange-vrs-records-management-modal.component";

@Component({
  selector: 'app-xchange-vrs-records-management',
  standalone: true,
  imports: [AgGridAngular, XchangeVrsRecordsManagementModalComponent],
  templateUrl: './xchange-vrs-records-management.component.html',
  styleUrl: './xchange-vrs-records-management.component.css'
})


export class XchangeVrsRecordsManagementComponent implements OnInit{
  constructor(private router: Router) {}

  rowStyle = { fontFamilyValueToCss: 'blue' };


  gridOptions: GridOptions = {
    columnDefs:[{"field":"ID","headerName":"ID","headerClass":"id-header","width":100},{"field":"GUID","headerClass":"id-header","headerName":"GUID","width":138},{"field":"VRS_Partner","headerName":"VRS Partner","headerClass":"id-header","width":138},{"field":"GTIN","headerClass":"id-header","width":150},{"field":"Expiration_Date","headerName":"Expiration Date","headerClass":"id-header","width":150},{"field":"Status","headerClass":"id-header","width":130},{"field":"Requested","headerClass":"id-header"},{"field":"View","headerName":"","headerClass":"id-header","width":100}],
    rowData: [
      {"ID":"6","GUID":"0321012345676","VRS_Partner":1665432109876,"GTIN":"0523012345680","Expiration_Date":"18-02-2027","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"7","GUID":"0422012345678","VRS_Partner":1659876543210,"GTIN":"0321012345676","Expiration_Date":"22-05-2026","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"8","GUID":"0523012345680","VRS_Partner":1648753092837,"GTIN":"0422012345678","Expiration_Date":"15-09-2026","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"9","GUID":"0321012345676","VRS_Partner":1634821098765,"GTIN":"0523012345680","Expiration_Date":"28-11-2026","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"10","GUID":"0422012345678","VRS_Partner":1674302875643,"GTIN":"0321012345676","Expiration_Date":"03-06-2027","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"11","GUID":"0523012345680","VRS_Partner":1689237451023,"GTIN":"0422012345678","Expiration_Date":"21-10-2026","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"12","GUID":"0321012345676","VRS_Partner":1652304875693,"GTIN":"0523012345680","Expiration_Date":"11-01-2027","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"13","GUID":"0422012345678","VRS_Partner":1645782930215,"GTIN":"0321012345676","Expiration_Date":"09-03-2026","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"14","GUID":"0523012345680","VRS_Partner":1631894026538,"GTIN":"0422012345678","Expiration_Date":"19-08-2027","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"15","GUID":"0321012345676","VRS_Partner":1680327419534,"GTIN":"0523012345680","Expiration_Date":"25-12-2026","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"16","GUID":"0422012345678","VRS_Partner":1678094532045,"GTIN":"0321012345676","Expiration_Date":"04-07-2027","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"17","GUID":"0523012345680","VRS_Partner":1645763012490,"GTIN":"0422012345678","Expiration_Date":"28-10-2026","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"18","GUID":"0321012345676","VRS_Partner":1673048209542,"GTIN":"0523012345680","Expiration_Date":"11-05-2027","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"19","GUID":"0422012345678","VRS_Partner":1639205382037,"GTIN":"0321012345676","Expiration_Date":"03-08-2026","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"20","GUID":"0523012345680","VRS_Partner":1640128095471,"GTIN":"0422012345678","Expiration_Date":"22-02-2026","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"21","GUID":"0321012345676","VRS_Partner":1658391240562,"GTIN":"0523012345680","Expiration_Date":"13-09-2027","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"22","GUID":"0422012345678","VRS_Partner":1676342981673,"GTIN":"0321012345676","Expiration_Date":"07-01-2027","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"23","GUID":"0523012345680","VRS_Partner":1664219856348,"GTIN":"0422012345678","Expiration_Date":"24-05-2026","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"24","GUID":"0321012345676","VRS_Partner":1672034198432,"GTIN":"0523012345680","Expiration_Date":"09-09-2027","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"25","GUID":"0422012345678","VRS_Partner":1684572105678,"GTIN":"0321012345676","Expiration_Date":"11-04-2026","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"26","GUID":"0523012345680","VRS_Partner":1650720498126,"GTIN":"0422012345678","Expiration_Date":"28-06-2027","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"27","GUID":"0321012345676","VRS_Partner":1675328906712,"GTIN":"0523012345680","Expiration_Date":"02-02-2026","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"28","GUID":"0422012345678","VRS_Partner":1687934620174,"GTIN":"0321012345676","Expiration_Date":"14-10-2027","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"29","GUID":"0523012345680","VRS_Partner":1648126573125,"GTIN":"0422012345678","Expiration_Date":"15-06-2026","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"30","GUID":"0321012345676","VRS_Partner":1670918325603,"GTIN":"0523012345680","Expiration_Date":"21-02-2027","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"31","GUID":"0422012345678","VRS_Partner":1642203956987,"GTIN":"0321012345676","Expiration_Date":"11-03-2027","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"32","GUID":"0523012345680","VRS_Partner":1684629830524,"GTIN":"0422012345678","Expiration_Date":"16-06-2026","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"33","GUID":"0321012345676","VRS_Partner":1652914765731,"GTIN":"0523012345680","Expiration_Date":"05-10-2027","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"34","GUID":"0422012345678","VRS_Partner":1684712395238,"GTIN":"0321012345676","Expiration_Date":"22-01-2026","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"35","GUID":"0523012345680","VRS_Partner":1674203641285,"GTIN":"0422012345678","Expiration_Date":"17-09-2026","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"36","GUID":"0321012345676","VRS_Partner":1650182376654,"GTIN":"0523012345680","Expiration_Date":"02-04-2027","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"37","GUID":"0422012345678","VRS_Partner":1638457912856,"GTIN":"0321012345676","Expiration_Date":"18-06-2026","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"38","GUID":"0523012345680","VRS_Partner":1685823120459,"GTIN":"0422012345678","Expiration_Date":"09-01-2027","Status":"Completed","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"39","GUID":"0321012345676","VRS_Partner":1672035467240,"GTIN":"0523012345680","Expiration_Date":"12-07-2027","Status":"Pending","Requested":"04-28-2025 / 11:52:AM","View":"View"},
{"ID":"40","GUID":"0422012345678","VRS_Partner":1637826090137,"GTIN":"0321012345676","Expiration_Date":"15-05-2026","Status":"Failed","Requested":"04-28-2025 / 11:52:AM","View":"View"}
    ],
    suppressRowHoverHighlight: true,
    columnHoverHighlight:true,
  };

  myTheme = themeMaterial.withParams({
    fontFamily: "National Park",
    headerFontFamily: "Brush Script MT",
    cellFontFamily: "monospace",
    fontSize:12,
    textColor:'#555'
    
  });

  theme: Theme | "legacy" = this.myTheme;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
