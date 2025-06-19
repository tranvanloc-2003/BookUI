import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesRequestModel } from '../models/categories-request-model';
import { environment } from '../../../../environments/environment.development';
import { AddCategoriesRequest } from '../models/add-categories-request';

@Injectable({
  providedIn: 'root'
})
export class Categories {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<CategoriesRequestModel[]> {
    return this.http.get<CategoriesRequestModel[]>(`${environment.urlLocalhost}/api/Categories`);
  }
  addCategories(categories : AddCategoriesRequest):Observable<void>{
    return this.http.post<void>(`${environment.urlLocalhost}/api/Categories`, categories);
  }
}
