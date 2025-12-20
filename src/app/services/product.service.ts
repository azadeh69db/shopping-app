import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import type{ Product} from '../models/Product';

// export interface Product {
//  id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating?: {
//     rate: number;
//     count: number;
//   };
// }

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  // گرفتن همه محصولات
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  // گرفتن محصول با آیدی
  getProductById(id: number): Observable<Product> {

  return this.httpClient.get<Product>('${this.apiUrl}/${id}')}
}