import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
  getDefaultMessage(): string {
    return "Demo servie is running";
  }
}
