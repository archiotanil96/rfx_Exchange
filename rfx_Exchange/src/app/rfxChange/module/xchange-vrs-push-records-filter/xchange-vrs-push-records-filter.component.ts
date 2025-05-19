import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-xchange-vrs-push-records-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './xchange-vrs-push-records-filter.component.html',
  styleUrls: ['./xchange-vrs-push-records-filter.component.css']
})
export class XchangeVrsPushRecordsFilterComponent implements OnInit, AfterViewInit {
  @ViewChild('inputField') inputField!: ElementRef<HTMLInputElement>;
  filterOverlay!: HTMLElement;
  closeFilter!: HTMLElement;
  form!: FormGroup;

  allSuggestions: string[] = [
    'Apple', 'Banana', 'Blueberry', 'Cherry',
    'Grape', 'Mango', 'Orange', 'Peach',
    'Pear', 'Strawberry'
  ];
  filteredSuggestions: string[] = [];
  selectedItems: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fruitInput: ['']
    });

    this.form.get('fruitInput')?.valueChanges.subscribe(value => {
      this.filterSuggestions(value);
    });
  }

  filterSuggestions(value: string): void {
    if (!value) {
      this.filteredSuggestions = [];
      return;
    }
    const filterValue = value.toLowerCase();
    this.filteredSuggestions = this.allSuggestions.filter(option =>
      option.toLowerCase().startsWith(filterValue) &&
      !this.selectedItems.includes(option)
    );
  }

  selectSuggestion(suggestion: string): void {
    if (!this.selectedItems.includes(suggestion)) {
      this.selectedItems.push(suggestion);
    }
    // Clear input and filtered suggestions
    this.form.get('fruitInput')?.setValue('');
    this.filteredSuggestions = [];

    // Focus input after selection
    setTimeout(() => {
      this.inputField.nativeElement.focus();
    }, 0);
  }

  removeItem(item: string): void {
    this.selectedItems = this.selectedItems.filter(i => i !== item);
    // Optional: trigger filter update or re-focus input here if needed
  }

  submit(): void {
    console.log('Selected items:', this.selectedItems);
  }

  ngAfterViewInit() {
    this.filterOverlay = document.getElementById('filterOverlay') as HTMLElement;
    this.closeFilter = document.getElementById('closeFilter') as HTMLElement;

    this.filterOverlay?.classList.add('active');

    // Close on outside click
    this.filterOverlay?.addEventListener('click', (e: Event) => {
      if (e.target === this.filterOverlay) {
        this.filterOverlay.classList.remove('active');
      }
    });

    // Close on close button
    this.closeFilter?.addEventListener('click', () => {
      this.filterOverlay.classList.remove('active');
    });
  }
}
