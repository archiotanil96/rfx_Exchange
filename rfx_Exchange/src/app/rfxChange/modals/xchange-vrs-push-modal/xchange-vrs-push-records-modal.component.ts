import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-xchange-vrs-push-records-modal',
  templateUrl: './xchange-vrs-push-records-modal.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./xchange-vrs-push-records-modal.component.css']
})
export class XchangeVrsPushRecordsModalComponent implements AfterViewInit {

  @Input() recordCount: number = 0;  // Receive data from parent
  isModalOpen: boolean = true;

  @Output() cancel = new EventEmitter<void>(); // Notify parent on close
  @Output() push = new EventEmitter<void>();   // Notify parent on push action

  @ViewChild('pushSuccess') pushSuccess!: ElementRef<HTMLDivElement>;
  @ViewChild('pushInital') pushInital!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    // Show initial view on load
    this.showInitialView();
  }

  showInitialView() {
    this.pushInital.nativeElement.style.display = 'block';
    this.pushSuccess.nativeElement.style.display = 'none';
  }

  showSuccessView() {
    this.pushInital.nativeElement.style.display = 'none';
    this.pushSuccess.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.isModalOpen = false;
    this.cancel.emit();  // Notify parent to close modal
  }

  submitModal() {
    // Example: logic before showing success view
    this.showSuccessView();
    this.push.emit();  // Notify parent of push event
  }
}
