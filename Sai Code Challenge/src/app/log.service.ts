import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  userDetails = {
    name: '',
    password: '',
  };

  constructor() { }

  getUser() {
    this.userDetails = JSON.parse(localStorage.getItem('logindetails'));
    return of(this.userDetails.name);
  }
}
