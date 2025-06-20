import { Routes } from '@angular/router';
import { CategoriesList } from './features/Categories/categories-list/categories-list';
import { AddCategories } from './features/Categories/add-categories/add-categories';
import { UpdateCategories } from './features/Categories/update-categories/update-categories';
import { ListBrand } from './features/Brands/list-brand/list-brand';
import { AddBrand } from './features/Brands/add-brand/add-brand';
import { UpdateBrand } from './features/Brands/update-brand/update-brand';
import { ListBook } from './features/Books/list-book/list-book';
import { AddBook } from './features/Books/add-book/add-book';
import { UpdateBook } from './features/Books/update-book/update-book';

export const routes: Routes = [
    {
        path: 'categories',
        component: CategoriesList
    },
    {
        path: 'categories/add',
        component: AddCategories
    },
    {
        path: 'categories/update/:id',
        component: UpdateCategories
    },
    //brand
    { path: 'brands', component: ListBrand },
    { path: 'brands/add', component: AddBrand },
    { path: 'brands/update/:id', component: UpdateBrand },
    //books
    {path:'books', component: ListBook},{path:'books/add',component:AddBook},{path:'books/update/:id',component :UpdateBook}
];
