import { Component, EventEmitter, Input, OnChanges, OnInit, Output,SimpleChanges  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventService } from 'src/app/services/authServices/closeModalService';

@Component({
  selector: 'app-xchange-vrs-records-management-modal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './xchange-vrs-records-management-modal.component.html',
  styleUrl: './xchange-vrs-records-management-modal.component.css'
})


export class XchangeVrsRecordsManagementModalComponent implements OnInit,OnChanges{
  constructor(private eventService: EventService) {}
  @Output() close = new EventEmitter<void>();  
  @Input() parentVrsExchangeData:any = [];
  status: string = ''; 
  recordsModalData:any = [];

  
  ngOnInit(): void {

      this.recordsModalData = this.parentVrsExchangeData;
      console.log(this.recordsModalData );

  }

  onSubmit(formValue:any) {
    console.log(formValue);
  }

  closeModal() {
    this.eventService.closeModalEvent.emit(); 
  }

  onBackClicked() {
    console.log('Back button clicked');
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentRowData']) {
      console.log('New message from parent:', this.parentVrsExchangeData);
    }
  }

  getStatusClass(): string {
    if (this.status === 'active') {
      return 'active';
    } else if (this.status === 'inactive') {
      return 'inactive';
    } else if (this.status === 'deleted') {
      return 'deleted';
    }else {
      return 'placeholder';
    }
  }



}
