import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import type { ColDef, GridOptions } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Router } from '@angular/router';
import { XchangeVerificationDetailsFilterComponent } from 'src/app/rfxChange/model/xchange_filter_modal/xchange_verification_details/xchange-verification-details-filter/xchange-verification-details-filter.component';
import { fontFamilyValueToCss } from 'ag-grid-community/dist/types/src/theming/theme-types';

ModuleRegistry.registerModules([AllCommunityModule]);
interface IRow {
  ID: string;
  Requestor_GLN: string;
  Responder_GLN: number;
  Requestor_VRS_Provider: string;
  Responder_VRS_Provider:String;
  GTIN:string;
  Serial_Number:string;
  Batch_LOT:String;
  Expiration_Date:string;
  Status:string;
  Download:string;
  Requested:string,
  View:String

}
@Component({
  selector: 'app-xchange-verification-events',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './xchange-verification-events.component.html',
  styleUrl: './xchange-verification-events.component.css'
})
export class XchangeVerificationEventsComponent implements OnInit{
  constructor(private router: Router) {}
  rowStyle = { fontFamilyValueToCss: 'blue' };


  gridOptions: GridOptions = {
    columnDefs: [
      {field:"ID",headerName: 'ID',headerClass:"id-header"},{field:"Requestor_GLN",headerClass:"id-header",headerName: 'Requestor GLN'},{field:"Responder_GLN",headerName: 'Responder GLN',headerClass:"id-header"},{field:"Requestor_VRS_Provider",headerName:'Requestor VRS Provider',headerClass:"id-header"},{field:"Responder_VRS_Provider",headerName:"Responder VRS Provider",headerClass:"id-header"},{field:"GTIN",headerClass:"id-header"},{field:"Serial_Number",headerName:'Serial Number',headerClass:"id-header"},{field:"Batch_LOT",headerName:"Batch/LOT",headerClass:"id-header"},{field:"Expiration_Date",headerName:"Expiration Date",headerClass:"id-header"},{field:"Status",headerClass:"id-header"},{field:"Download",headerClass:"id-header"},{field:"Requested",headerClass:"id-header"},{field:"View",headerName:"",headerClass:"id-header"}
    ],
    rowData: [
      { ID: "1", Requestor_GLN: "0422012345678", Responder_GLN: 1634509800123, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'RFXCel', GTIN: '0523012345680', Serial_Number: '703219', Batch_LOT: "3012456F", Expiration_Date: "14-09-2026", Status: "Pending", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "2", Requestor_GLN: "0422012345678", Responder_GLN: 1629874567890, Requestor_VRS_Provider: 'RFXCel', Responder_VRS_Provider: 'SAP', GTIN: '0321012345676', Serial_Number: '500912', Batch_LOT: "2109763B", Expiration_Date: "02-03-2026", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "3", Requestor_GLN: "0523012345680", Responder_GLN: 1671234567890, Requestor_VRS_Provider: 'SAP', Responder_VRS_Provider: 'Mediledger', GTIN: '0422012345678', Serial_Number: '400806', Batch_LOT: "1908642E", Expiration_Date: "01-01-2027", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "4", Requestor_GLN: "0321012345676", Responder_GLN: 1645678901234, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'SAP', GTIN: '0422012345678', Serial_Number: '602134', Batch_LOT: "3012456F", Expiration_Date: "17-06-2027", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "5", Requestor_GLN: "0523012345680", Responder_GLN: 1623456789012, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'TraceLink', GTIN: '0523012345680', Serial_Number: '703219', Batch_LOT: "2208642D", Expiration_Date: "08-11-2026", Status: "Failed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "6", Requestor_GLN: "0321012345676", Responder_GLN: 1667890123456, Requestor_VRS_Provider: 'SAP', Responder_VRS_Provider: 'Mediledger', GTIN: '0422012345678', Serial_Number: '500912', Batch_LOT: "2109763B", Expiration_Date: "25-12-2026", Status: "Pending", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "7", Requestor_GLN: "0422012345678", Responder_GLN: 1678901234567, Requestor_VRS_Provider: 'RFXCel', Responder_VRS_Provider: 'TraceLink', GTIN: '0321012345676', Serial_Number: '400806', Batch_LOT: "1908642E", Expiration_Date: "19-04-2026", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "8", Requestor_GLN: "0523012345680", Responder_GLN: 1634567890123, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'RFXCel', GTIN: '0523012345680', Serial_Number: '602134', Batch_LOT: "3012456F", Expiration_Date: "30-08-2027", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "9", Requestor_GLN: "0422012345678", Responder_GLN: 1624567890123, Requestor_VRS_Provider: 'SAP', Responder_VRS_Provider: 'Mediledger', GTIN: '0321012345676', Serial_Number: '703219', Batch_LOT: "2208642D", Expiration_Date: "05-05-2026", Status: "Failed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "10", Requestor_GLN: "0321012345676", Responder_GLN: 1665432109876, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'RFXCel', GTIN: '0422012345678', Serial_Number: '500912', Batch_LOT: "2109763B", Expiration_Date: "28-01-2027", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "11", Requestor_GLN: "0523012345680", Responder_GLN: 1632109876543, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'TraceLink', GTIN: '0523012345680', Serial_Number: '602134', Batch_LOT: "1908642E", Expiration_Date: "02-06-2027", Status: "Pending", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "12", Requestor_GLN: "0422012345678", Responder_GLN: 1676543210987, Requestor_VRS_Provider: 'RFXCel', Responder_VRS_Provider: 'SAP', GTIN: '0321012345676', Serial_Number: '400806', Batch_LOT: "3012456F", Expiration_Date: "14-07-2026", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "13", Requestor_GLN: "0321012345676", Responder_GLN: 1663210987654, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'Mediledger', GTIN: '0422012345678', Serial_Number: '703219', Batch_LOT: "2109763B", Expiration_Date: "09-08-2026", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "14", Requestor_GLN: "0422012345678", Responder_GLN: 1639876543210, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'SAP', GTIN: '0523012345680', Serial_Number: '500912', Batch_LOT: "2208642D", Expiration_Date: "11-03-2027", Status: "Failed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "15", Requestor_GLN: "0523012345680", Responder_GLN: 1621098765432, Requestor_VRS_Provider: 'SAP', Responder_VRS_Provider: 'TraceLink', GTIN: '0321012345676', Serial_Number: '602134', Batch_LOT: "3012456F", Expiration_Date: "21-10-2026", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "16", Requestor_GLN: "0321012345676", Responder_GLN: 1656789012345, Requestor_VRS_Provider: 'RFXCel', Responder_VRS_Provider: 'Mediledger', GTIN: '0422012345678', Serial_Number: '400806', Batch_LOT: "2109763B", Expiration_Date: "07-09-2027", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "17", Requestor_GLN: "0422012345678", Responder_GLN: 1674321098765, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'SAP', GTIN: '0523012345680', Serial_Number: '703219', Batch_LOT: "2208642D", Expiration_Date: "30-06-2026", Status: "Pending", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "18", Requestor_GLN: "0523012345680", Responder_GLN: 1628765432109, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'RFXCel', GTIN: '0321012345676', Serial_Number: '602134', Batch_LOT: "1908642E", Expiration_Date: "17-04-2026", Status: "Failed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "19", Requestor_GLN: "0321012345676", Responder_GLN: 1654321098765, Requestor_VRS_Provider: 'RFXCel', Responder_VRS_Provider: 'TraceLink', GTIN: '0422012345678', Serial_Number: '500912', Batch_LOT: "2109763B", Expiration_Date: "20-02-2027", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "20", Requestor_GLN: "0422012345678", Responder_GLN: 1670987654321, Requestor_VRS_Provider: 'SAP', Responder_VRS_Provider: 'TraceLink', GTIN: '0523012345680', Serial_Number: '400806', Batch_LOT: "3012456F", Expiration_Date: "03-11-2026", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View"},
      { ID: "21", Requestor_GLN: "0422012345678", Responder_GLN: 1634567890123, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'TraceLink', GTIN: '0321012345676', Serial_Number: '500912', Batch_LOT: "2208642D", Expiration_Date: "15-07-2027", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "22", Requestor_GLN: "0523012345680", Responder_GLN: 1676543210987, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'SAP', GTIN: '0422012345678', Serial_Number: '602134', Batch_LOT: "3012456F", Expiration_Date: "23-05-2026", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "23", Requestor_GLN: "0321012345676", Responder_GLN: 1689876543210, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'RFXCel', GTIN: '0523012345680', Serial_Number: '703219', Batch_LOT: "2109763B", Expiration_Date: "11-02-2027", Status: "Pending", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "24", Requestor_GLN: "0422012345678", Responder_GLN: 1654321098765, Requestor_VRS_Provider: 'SAP', Responder_VRS_Provider: 'Mediledger', GTIN: '0321012345676', Serial_Number: '400806', Batch_LOT: "2208642D", Expiration_Date: "07-11-2026", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "25", Requestor_GLN: "0523012345680", Responder_GLN: 1643210987654, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'SAP', GTIN: '0422012345678', Serial_Number: '602134', Batch_LOT: "3012456F", Expiration_Date: "18-03-2027", Status: "Failed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "26", Requestor_GLN: "0321012345676", Responder_GLN: 1669876543210, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'TraceLink', GTIN: '0523012345680', Serial_Number: '500912', Batch_LOT: "1908642E", Expiration_Date: "05-12-2027", Status: "Pending", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "27", Requestor_GLN: "0422012345678", Responder_GLN: 1698765432109, Requestor_VRS_Provider: 'RFXCel', Responder_VRS_Provider: 'Mediledger', GTIN: '0321012345676', Serial_Number: '703219', Batch_LOT: "3012456F", Expiration_Date: "27-08-2026", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "28", Requestor_GLN: "0523012345680", Responder_GLN: 1678901234567, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'RFXCel', GTIN: '0422012345678', Serial_Number: '602134', Batch_LOT: "1908642E", Expiration_Date: "04-06-2027", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "29", Requestor_GLN: "0321012345676", Responder_GLN: 1609876543210, Requestor_VRS_Provider: 'SAP', Responder_VRS_Provider: 'TraceLink', GTIN: '0523012345680', Serial_Number: '400806', Batch_LOT: "2208642D", Expiration_Date: "02-07-2026", Status: "Failed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "30", Requestor_GLN: "0422012345678", Responder_GLN: 1643219876543, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'RFXCel', GTIN: '0321012345676', Serial_Number: '500912', Batch_LOT: "3012456F", Expiration_Date: "03-02-2027", Status: "Pending", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "31", Requestor_GLN: "0523012345680", Responder_GLN: 1674321098765, Requestor_VRS_Provider: 'RFXCel', Responder_VRS_Provider: 'TraceLink', GTIN: '0422012345678', Serial_Number: '602134', Batch_LOT: "2208642D", Expiration_Date: "13-08-2026", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "32", Requestor_GLN: "0321012345676", Responder_GLN: 1687654321098, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'Mediledger', GTIN: '0523012345680', Serial_Number: '703219', Batch_LOT: "1908642E", Expiration_Date: "09-04-2027", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "33", Requestor_GLN: "0422012345678", Responder_GLN: 1695432109876, Requestor_VRS_Provider: 'RFXCel', Responder_VRS_Provider: 'SAP', GTIN: '0321012345676', Serial_Number: '500912', Batch_LOT: "2208642D", Expiration_Date: "17-09-2026", Status: "Pending", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "34", Requestor_GLN: "0523012345680", Responder_GLN: 1601239876543, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'Mediledger', GTIN: '0422012345678', Serial_Number: '602134', Batch_LOT: "3012456F", Expiration_Date: "20-06-2027", Status: "Failed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "35", Requestor_GLN: "0321012345676", Responder_GLN: 1672345678901, Requestor_VRS_Provider: 'SAP', Responder_VRS_Provider: 'TraceLink', GTIN: '0523012345680', Serial_Number: '400806', Batch_LOT: "2208642D", Expiration_Date: "25-01-2027", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "36", Requestor_GLN: "0422012345678", Responder_GLN: 1658765432109, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'RFXCel', GTIN: '0321012345676', Serial_Number: '500912', Batch_LOT: "1908642E", Expiration_Date: "14-12-2026", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "37", Requestor_GLN: "0523012345680", Responder_GLN: 1625432109876, Requestor_VRS_Provider: 'SAP', Responder_VRS_Provider: 'TraceLink', GTIN: '0422012345678', Serial_Number: '602134', Batch_LOT: "3012456F", Expiration_Date: "16-10-2027", Status: "Pending", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "38", Requestor_GLN: "0321012345676", Responder_GLN: 1662310987654, Requestor_VRS_Provider: 'Mediledger', Responder_VRS_Provider: 'SAP', GTIN: '0523012345680', Serial_Number: '703219', Batch_LOT: "2208642D", Expiration_Date: "22-11-2026", Status: "Completed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "39", Requestor_GLN: "0422012345678", Responder_GLN: 1649876543210, Requestor_VRS_Provider: 'TraceLink', Responder_VRS_Provider: 'Mediledger', GTIN: '0321012345676', Serial_Number: '400806', Batch_LOT: "1908642E", Expiration_Date: "26-07-2026", Status: "", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" },
      { ID: "40", Requestor_GLN: "0523012345680", Responder_GLN: 1632109876543, Requestor_VRS_Provider: 'RFXCel', Responder_VRS_Provider: 'TraceLink', GTIN: '0422012345678', Serial_Number: '602134', Batch_LOT: "3012456F", Expiration_Date: "04-09-2026", Status: "Failed", Download: "", Requested: "04-28-2025 / 11:52:AM", View: "View" }
  
    ],
    suppressRowHoverHighlight: true,
    columnHoverHighlight:true,
  };
  

  ngOnInit(): void {
    console.log("event")
  }

  verificationEventFilter()
  {
    console.log("clicked");
    this.router.navigate(['/login']);
  }
}


