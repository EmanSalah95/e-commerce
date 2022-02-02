import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsBackService {
   httpOptions ;
  constructor(private httpC: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        ,Authorization: 'my-auth-token'
      })
    };
  }

  getProducts(): Observable<IProduct[]> {
    return this.httpC.get<IProduct[]>(`${environment.API}/products`);
  }

  getProductById(id:number): Observable<IProduct> {
    return this.httpC.get<IProduct>(`${environment.API}/products/${id}`);
  }

  addProduct(obj:IProduct): Observable<IProduct> {
    return this.httpC.post<IProduct>(`${environment.API}/products`,JSON.stringify(obj) , this.httpOptions);
  }

  editProduct(obj:IProduct): Observable<IProduct> {
    return this.httpC.put<IProduct>(`${environment.API}/products/${obj.id}`,JSON.stringify(obj) , this.httpOptions);
  }

  deleteProduct(id:number): Observable<IProduct> {
    return this.httpC.delete<IProduct>(`${environment.API}/products/${id}`, this.httpOptions);
  }


}
