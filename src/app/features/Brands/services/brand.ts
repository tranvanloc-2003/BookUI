import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandRequestModel } from '../models/brand-request-model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Brand {

  constructor(private http : HttpClient) { }

  getAllBrands():Observable<BrandRequestModel[]> {
    return this.http.get<BrandRequestModel[]>(`${environment.urlLocalhost}/api/brand`);

  }
  getBrandById(id: string): Observable<BrandRequestModel> {
    return this.http.get<BrandRequestModel>(`${environment.urlLocalhost}/api/brand/${id}`);
  }
  addBrand(brand: BrandRequestModel): Observable<void> {
    return this.http.post<void>(`${environment.urlLocalhost}/api/brand`, brand);
  }
  updateBrand(id: string, brand: BrandRequestModel): Observable<BrandRequestModel> {
    return this.http.put<BrandRequestModel>(`${environment.urlLocalhost}/api/brand/${id}`, brand);
  }
  deleteBrand(id: string): Observable<BrandRequestModel> {
    return this.http.delete<BrandRequestModel>(`${environment.urlLocalhost}/api/brand/${id}`);
  }
}
