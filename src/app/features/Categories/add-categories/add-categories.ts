import { Component, OnDestroy } from '@angular/core';
import { Categories } from '../services/categories';
import { Router } from '@angular/router';
import { AddCategoriesRequest } from '../models/add-categories-request';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-categories',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-categories.html',
  styleUrl: './add-categories.css'
})
export class AddCategories implements OnDestroy {
  addCategories: AddCategoriesRequest;
  addCategoriesSubcription?: Subscription;
  constructor(private categoriesServices: Categories, private router: Router) {
    this.addCategories = {
      name: '',
      urlHandle: ''
    };
  }
  onSubmit(): void {
    this.addCategoriesSubcription = this.categoriesServices.addCategories(this.addCategories).subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/categories');
      }
    })
  }
  ngOnDestroy(): void {
   this.addCategoriesSubcription?.unsubscribe();
  }
}

