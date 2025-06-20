import { Component, OnDestroy, OnInit } from '@angular/core';
import { Brand } from '../services/brand';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BrandRequestModel } from '../models/brand-request-model';
import { UpdateBrandRequest } from '../models/update-brand-request';

@Component({
  selector: 'app-update-brand',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-brand.html',
  styleUrl: './update-brand.css'
})
export class UpdateBrand implements OnInit, OnDestroy {
  id: string | null = null;
  brand?: BrandRequestModel;
  updateBrandSubscription?: Subscription;
  brandSubscription?: Subscription;
  constructor(private brandServices: Brand, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        if (this.id) {
          this.brandSubscription = this.brandServices.getBrandById(this.id).subscribe({
            next: (response) => {
              this.brand = response;
            }
          })

        }
      }
    })
  }
  onUpdateForm(): void {
    const updateBrandRequest: UpdateBrandRequest = {
      nameBrand: this.brand?.nameBrand ?? '',
      urlHandle: this.brand?.urlHandle ?? '',
      featuredImage: this.brand?.featuredImage ?? ''
    }; 
    if (this.id) {
      this.updateBrandSubscription =  this.brandServices.updateBrand(this.id, updateBrandRequest).subscribe({
          next: (response) => {
            this.router.navigateByUrl('/brands');
          },
          error: (error) => {
            console.error('Error updating brand:', error);
          }
        })
    }
  }
  onDeleteForm(): void {
    if(this.id){
      this.brandServices.deleteBrand(this.id).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/brands');
        },
        error: (error) => {
          console.error('Error deleting brand:', error);
        }
      })
    }
  }
  ngOnDestroy(): void {
    this.updateBrandSubscription?.unsubscribe();
    this.brandSubscription?.unsubscribe();
  }
}
