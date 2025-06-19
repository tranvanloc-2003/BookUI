import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookServices } from '../services/book-services';
import { Router } from '@angular/router';
import { AddBookRequest } from '../models/add-book-request';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { Categories } from '../../Categories/services/categories';
import { CategoriesRequestModel } from '../../Categories/models/categories-request-model';
import { Brand } from '../../Brands/services/brand';
import { BrandRequestModel } from '../../Brands/models/brand-request-model';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule,CommonModule,DatePipe],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook implements OnDestroy,OnInit {
  addBook: AddBookRequest;
  categories$?:Observable<CategoriesRequestModel[]>;
  brands$?:Observable<BrandRequestModel[]>;
  addBookSubscription?: Subscription;
  constructor(private bookServices: BookServices, private router: Router,private categoriesServices:Categories,private brandServices: Brand) {
    this.addBook = {
      title: '',
      description: '',
      author: '',
      content: '',
      featuredImage: '',
      publicshedDate: new Date(),
      urlHandle:'',
      price: 0,
      isVisible: true,
      categoriesId: [],
      brandId: []
    }
  }
  ngOnInit(): void {
    this.categories$ = this.categoriesServices.getAllCategories();
    this.brands$ = this.brandServices.getAllBrands();

  }
  
  onSubmit():void{
    this.addBookSubscription =this.bookServices.addBook(this.addBook).subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/books');
        console.log('Book added successfully',response);
      },
      error:(error)=>{
        console.error('Error adding book', error);
      }
    })
  }
  ngOnDestroy(): void {
   this.addBookSubscription?.unsubscribe();
  }

}
