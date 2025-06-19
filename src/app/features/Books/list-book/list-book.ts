import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookRequestModel } from '../models/book-request-model';
import { BookServices } from '../services/book-services';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-book',
  imports: [CommonModule,RouterLink],
  templateUrl: './list-book.html',
  styleUrl: './list-book.css'
})
export class ListBook implements OnInit{
  constructor(private bookServices: BookServices) { }
   books$?: Observable<BookRequestModel[]>;
  ngOnInit(): void {
   this.books$ = this.bookServices.getAllBooks();
  }

}
