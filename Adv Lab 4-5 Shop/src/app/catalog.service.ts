import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/catalog');
  }

  search(query: string): Observable<Product[]> {
    return this.http.get<Product[]>('/api/catalog/search' + encodeURI(query));
  }
}
