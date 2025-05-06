import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-xchange-vrs-records-management-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './xchange-vrs-records-management-modal.component.html',
  styleUrl: './xchange-vrs-records-management-modal.component.css'
})


export class XchangeVrsRecordsManagementModalComponent implements OnInit{
  ngOnInit(): void {
    console.log("check")
  }

  onSubmit(formValue:any) {
    console.log(formValue);
  }

}
