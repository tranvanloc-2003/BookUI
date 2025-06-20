import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesRequestModel } from '../models/categories-request-model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../services/categories';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateCategoriesRequest } from '../models/update-categories-request';

@Component({
  selector: 'app-update-categories',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-categories.html',
  styleUrl: './update-categories.css'
})
export class UpdateCategories implements OnInit, OnDestroy {
  id: string | null = null;
  category?: CategoriesRequestModel;
  categoriesSubscription?: Subscription;
  updateCategoriesSubscription?: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private categoriesService: Categories) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.categoriesSubscription = this.categoriesService.getCategoriesById(this.id).subscribe({
            next: (response) => {
              this.category = response;
            }
          })
        }
      }
    })
  }
  onUpdateForm(): void {
    const updateCategories: UpdateCategoriesRequest = {
      name: this.category?.name || '',
      urlHandle: this.category?.urlHandle || ''
    };
    if (this.id) {
      this.updateCategoriesSubscription = this.categoriesService.updateCategories(this.id, updateCategories).subscribe({
        next: () => {
          this.router.navigate(['/categories']);
        },
        error: (error) => {
          console.error('Error updating category:', error);
        }
      })
    }
  }
  onDeleteForm(): void {
    if(this.id){
      this.updateCategoriesSubscription = this.categoriesService.deleteCategories(this.id).subscribe({
        next: (response) => {
          this.router.navigate(['/categories']);
        },
        error: (error) => {
          console.error('Error deleting category:', error);
        }
      });
    }
  }
  ngOnDestroy(): void {
    this.categoriesSubscription?.unsubscribe();
    this.updateCategoriesSubscription?.unsubscribe();
  }
}
