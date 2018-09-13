import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private readonly URL: string = `${environment.api}`;

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.URL}/products.json`);
  }
}
