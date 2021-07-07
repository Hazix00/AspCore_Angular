import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  success(message: string): void {
    alertify.success(message);
  }
  error(message: string): void {
    alertify.error(message);
  }
}
