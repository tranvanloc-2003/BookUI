import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrand } from './update-brand';

describe('UpdateBrand', () => {
  let component: UpdateBrand;
  let fixture: ComponentFixture<UpdateBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
