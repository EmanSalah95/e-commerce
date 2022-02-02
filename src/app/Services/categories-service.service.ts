import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from './../ViewModels/icategory';
@Injectable({
  providedIn: 'root',
})
export class CategoriesServiceService {
  constructor(private httpC: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.httpC.get<ICategory[]>(`${environment.API}/categories`);
  }

  getCategoryById(id: number): Observable<ICategory> {
    return this.httpC.get<ICategory>(`${environment.API}/categories?id=${id}`);
  }
}
