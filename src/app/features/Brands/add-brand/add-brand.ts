import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Brand } from '../services/brand';
import { Observable, Subscription } from 'rxjs';
import { BrandRequestModel } from '../models/brand-request-model';
import { AddBrandRequest } from '../models/add-brand-request';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-brand.html',
  styleUrl: './add-brand.css'
})
export class AddBrand implements OnDestroy {
  addBrand: AddBrandRequest;
  private brandSubscription?: Subscription;
  constructor(private brandServices: Brand, private router: Router) {
    this.addBrand = {
      id: '',
      nameBrand: '',
      urlHandle: '',
      featuredImage: ''
    }
  }

  onSubmit(): void {
    this.brandSubscription = this.brandServices.addBrand(this.addBrand).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/brands');
      }
    })
  }
  ngOnDestroy(): void {
    this.brandSubscription?.unsubscribe();
  }
}
