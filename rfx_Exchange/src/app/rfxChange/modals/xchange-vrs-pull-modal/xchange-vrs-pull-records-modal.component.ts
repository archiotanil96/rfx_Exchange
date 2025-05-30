import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-xchange-vrs-pull-records-modal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './xchange-vrs-pull-records-modal.component.html',
  styleUrl: './xchange-vrs-pull-records-modal.component.css'
})
export class XchangeVrsPullRecordsModalComponent implements OnInit,AfterViewInit{
  isModalOpen: boolean = true;
  @ViewChild('pullSuccess') pullSuccess!: ElementRef<HTMLDivElement>;
  @ViewChild('pullInitial') pullInitial!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
     this.showInitialView();
  }
  
  ngAfterViewInit() {
    // Show initial view on load
    this.showInitialView();
  }


formData = {
    serviceProvider: '',
    startDate: '2025-01-20',
    endDate: '2025-01-20'
  };

  serviceProviders = ['MedKeeper', 'DataSync', 'AnotherProvider'];

  onSubmit() {
    console.log('Pulling data with:', this.formData);
    // Your logic to fetch records here
  }

   showInitialView() {
     this.pullSuccess.nativeElement.style.display = 'none';
    this.pullInitial.nativeElement.style.display = 'block';
  }

  showSuccessView() {
    this.pullInitial.nativeElement.style.display = 'none';
    this.pullSuccess.nativeElement.style.display = 'block';
  }

    closeModal() {
    this.isModalOpen = false;
  }

}
