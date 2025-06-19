import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBrand } from './list-brand';

describe('ListBrand', () => {
  let component: ListBrand;
  let fixture: ComponentFixture<ListBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
