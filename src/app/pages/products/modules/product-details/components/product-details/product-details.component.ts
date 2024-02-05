import { Component, OnInit } from '@angular/core';
import { ProductDetailsRootProvidedService } from '../../services/product-details-root-provided.service';
import { ProductDetailsModuleProvidedService } from '../../services/product-details-module-provided.service';
import { FeatureRootProvidedService } from '../../../../../../feature/services/feature-root-provided.service';
import { ProductsRootProvidedService } from '../../../../services/products-root-provided.service';
import { ProductsModuleProvidedService } from '../../../../services/products-module-provided.service';
import { CoreRootProvidedService } from '../../../../../../core/services/core-root-provided.service';
import { CoreModuleProvidedService } from '../../../../../../core/services/core-module-provided.service';
import { ProductListRootProvidedService } from '../../../product-list/services/product-list-root-provided.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private productDetailsRootProvidedService: ProductDetailsRootProvidedService,
    private productDetailsModuleProvidedService: ProductDetailsModuleProvidedService,

    private productsRootProvidedService: ProductsRootProvidedService,
    private productsModuleProvidedService: ProductsModuleProvidedService,

    private featureRootProvidedService: FeatureRootProvidedService,

    private coreRootProvidedService: CoreRootProvidedService,
    private coreModuleProvidedService: CoreModuleProvidedService,

    private productListRootProvidedService: ProductListRootProvidedService,
  ) { }

  ngOnInit(): void {
    this.productDetailsRootProvidedService.log();
    this.productDetailsModuleProvidedService.log();

    this.productsRootProvidedService.log();
    this.productsModuleProvidedService.log();

    this.featureRootProvidedService.log();

    this.coreRootProvidedService.log();
    this.coreModuleProvidedService.log();

    this.productListRootProvidedService.log();
  }

}
