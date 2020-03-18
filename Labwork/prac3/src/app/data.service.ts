import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  getData() {
    return this.data;
  }

  getData1(): Observable<number[]> {
    return of(this.data);
  }

  pushData(d: number) {
    this.data.push(d);
    // console.log(this.data);
  }
}
