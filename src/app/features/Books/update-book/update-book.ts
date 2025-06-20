import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServices } from '../services/book-services';
import { BookRequestModel } from '../models/book-request-model';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Categories } from '../../Categories/services/categories';
import { Brand } from '../../Brands/services/brand';
import { UpdateBookRequest } from '../models/update-book-request';
import { CategoriesRequestModel } from '../../Categories/models/categories-request-model';
import { BrandRequestModel } from '../../Brands/models/brand-request-model';

@Component({
  selector: 'app-update-book',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-book.html',
  styleUrl: './update-book.css'
})
export class UpdateBook implements OnInit, OnDestroy {
  id: string | null = null;
  book?: BookRequestModel;
  selectedCategories?: string[];
  selectedBrands?: string[];
  categories$?: Observable<CategoriesRequestModel[]>;
  brands$?: Observable<BrandRequestModel[]>;
  bookSubscription?: Subscription;
  updateBookSubscription?: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private bookServices: BookServices, private categoriesServices: Categories, private brandServices: Brand) { }
  onUpdateForm(): void {
    if (this.id && this.book) {
      const updateBook: UpdateBookRequest = {
        title: this.book.title,
        description: this.book.description,
        price: this.book.price,
        author: this.book.author,
        content: this.book.content,
        featuredImage: this.book.featuredImage,
        publicshedDate: this.book.publicshedDate,
        urlHandle: this.book.urlHandle,
        isVisible: this.book.isVisible,
        CategoriesId: this.selectedCategories ?? [],
        BrandId: this.selectedBrands ?? []

      };
      this.updateBookSubscription = this.updateBookSubscription = this.bookServices.updateBook(this.id, updateBook).subscribe({
        next: () => {
          this.router.navigateByUrl('/books');
        },
        error: (error) => {
          console.error('Error updating book:', error);
        }
      })
    }
  }
  onDeleteForm(): void {

  }
  ngOnInit(): void {
    this.categories$ = this.categoriesServices.getAllCategories();
    this.brands$ = this.brandServices.getAllBrands();
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.bookSubscription = this.bookServices.getBookById(this.id).subscribe({
            next: (response) => {
              this.book = response;

              this.selectedBrands = response.categoriesDtos.map(x => x.id);
              this.selectedCategories = response.brandDtos.map(x => x.id);
              console.log('Book fetched successfully:', this.selectedBrands);
              console.log('Book fetched successfully:', this.selectedCategories);

            },
            error: (error) => {
              console.error('Error fetching book:', error);
            }
          })
        }
      }
    })
  }
  ngOnDestroy(): void {
    this.bookSubscription?.unsubscribe();
    this.updateBookSubscription?.unsubscribe();
  }
}
