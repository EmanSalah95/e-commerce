import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from './../ViewModels/icategory';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoryList: ICategory[];

  constructor(private httpC: HttpClient) {
    this.categoryList = [
      { id: 1, name: 'mobiles' },
      { id: 2, name: 'ipads' },
      { id: 3, name: 'tvs' },
    ];
  }

  getCategories(): Observable<ICategory[]> {
    return this.httpC.get<ICategory[]>(`${environment.API}/categories`);
  }

  getCategoryById(id: number): Observable<ICategory> {
    return this.httpC.get<ICategory>(`${environment.API}/categories?id=${id}`);
  }

  getLocatCategories():ICategory[]{
    return this.categoryList;
  }
}
