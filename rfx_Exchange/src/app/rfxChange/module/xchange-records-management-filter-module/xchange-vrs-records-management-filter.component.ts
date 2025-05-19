import { Component, OnInit, OnDestroy, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-xchange-vrs-records-management-filter',
  standalone: true,
  imports: [],
  templateUrl: './xchange-vrs-records-management-filter.component.html',
  styleUrl: './xchange-vrs-records-management-filter.component.css'
})
export class XchangeVrsRecordsManagementFilterComponent implements OnInit, AfterViewInit, OnDestroy {

  @Output() close = new EventEmitter<void>();

  filterOverlay!: HTMLElement;
  closeFilter!: HTMLElement;

  ngOnInit(): void {
    console.log("Hi");
  }

  ngAfterViewInit() {
    this.filterOverlay = document.getElementById('filterOverlay') as HTMLElement;
    this.closeFilter = document.getElementById('closeFilter') as HTMLElement;
    this.filterOverlay?.classList.add('active');

    this.filterOverlay?.addEventListener('click', this.handleOutsideClick);
    this.closeFilter?.addEventListener('click', this.handleCloseClick);
  }

  handleOutsideClick = (e: Event) => {
    if (e.target === this.filterOverlay) {
      this.close.emit(); // Parent will destroy the component
    }
  }

  handleCloseClick = () => {
    this.close.emit(); // Parent will destroy the component
  }

  ngOnDestroy(): void {
    console.log("Filter component destroyed.");
    // Optional: cleanup event listeners
    this.filterOverlay?.removeEventListener('click', this.handleOutsideClick);
    this.closeFilter?.removeEventListener('click', this.handleCloseClick);
  }

  
  onClose(): void {
    this.close.emit(); // Emit to parent
  }
  
}
