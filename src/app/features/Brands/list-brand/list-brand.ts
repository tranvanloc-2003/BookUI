import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Brand } from '../services/brand';
import { Observable } from 'rxjs';
import { BrandRequestModel } from '../models/brand-request-model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-brand',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './list-brand.html',
  styleUrl: './list-brand.css'
})
export class ListBrand implements OnInit {
  brands$?: Observable<BrandRequestModel[]>
constructor(private brandServices: Brand){

}
  ngOnInit(): void {
   this.brands$ = this.brandServices.getAllBrands();
  }
}
