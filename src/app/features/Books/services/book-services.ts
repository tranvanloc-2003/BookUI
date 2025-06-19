import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookRequestModel } from '../models/book-request-model';
import { environment } from '../../../../environments/environment';
import { AddBookRequest } from '../models/add-book-request';

@Injectable({
  providedIn: 'root'
})
export class BookServices {

  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<BookRequestModel[]> {
    return this.http.get<BookRequestModel[]>(`${environment.urlLocalhost}/api/book`);
  }
  getBookById(id: number): Observable<BookRequestModel> {
    return this.http.get<BookRequestModel>(`${environment.urlLocalhost}/api/book/${id}`);
  }
  addBook(book: AddBookRequest): Observable<BookRequestModel> {
    return this.http.post<BookRequestModel>(`${environment.urlLocalhost}/api/book`, book);
  }
}
