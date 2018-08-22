import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/';
import { Product } from '../interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private readonly URL: string = `${environment.api}`;

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.URL}`);
    // .map(data => data)
    // .do(data => console.log(data).catch(console.log()));
  }
}
