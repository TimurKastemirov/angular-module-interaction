import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    loadChildren: () => import('./modules/product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
