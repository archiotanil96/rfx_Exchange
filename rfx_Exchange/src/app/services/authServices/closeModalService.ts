import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',  // This ensures the service is available throughout the app
})
export class EventService {
  // EventEmitter to notify other components when the modal needs to be closed
  public closeModalEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}
}