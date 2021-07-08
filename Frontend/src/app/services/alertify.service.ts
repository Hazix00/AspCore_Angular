import { Injectable } from '@angular/core';
import { success, error } from 'alertifyjs';

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  success(message: string): void {
    success(message);
  }
  error(message: string): void {
    error(message);
  }
}
