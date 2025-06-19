import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CategoriesRequestModel } from '../models/categories-request-model';
import { Categories } from '../services/categories';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-list',
  imports: [RouterLink, FormsModule,CommonModule],
  templateUrl: './categories-list.html',
  styleUrl: './categories-list.css'
})
export class CategoriesList implements OnInit {
  categories$?: Observable<CategoriesRequestModel[]>;
  constructor(private categoriesServices: Categories) { }
  ngOnInit(): void {
    this.categories$ = this.categoriesServices.getAllCategories();
      this.categories$.subscribe(data => console.log('Categories data:', data));
  }

}
