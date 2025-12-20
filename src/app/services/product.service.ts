import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import type{ Product} from '../models/Product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  // BehaviorSubject برای آی‌دی فعلی محصول
  private currentProductIdSubject = new BehaviorSubject<number | null>(null);
  currentProductId$ = this.currentProductIdSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  // متد برای آپدیت آی‌دی فعلی محصول
  setCurrentProductId(id: number) {
    this.currentProductIdSubject.next(id);
  }
}

