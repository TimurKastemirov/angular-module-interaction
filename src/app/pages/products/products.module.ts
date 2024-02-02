import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FeatureModule } from '../../feature/feature.module';
import { ProductsModuleProvidedService } from './services/products-module-provided.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FeatureModule,
  ],
  providers: [ProductsModuleProvidedService],
})
export class ProductsModule { }
