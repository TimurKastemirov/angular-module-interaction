import { Component, OnInit } from '@angular/core';
import { ProductListRootProvidedService } from '../../services/product-list-root-provided.service';
import { ProductListModuleProvidedService } from '../../services/product-list-module-provided.service';
import { FeatureRootProvidedService } from '../../../../../../feature/services/feature-root-provided.service';
import { FeatureModuleProvidedService } from '../../../../../../feature/services/feature-module-provided.service';
import { ProductsRootProvidedService } from '../../../../services/products-root-provided.service';
import { ProductsModuleProvidedService } from '../../../../services/products-module-provided.service';
import { ProvidedInAppComponentService } from '../../../../../../services/provided-in-app-component.service';
import { CoreRootProvidedService } from '../../../../../../core/services/core-root-provided.service';
import { CoreModuleProvidedService } from '../../../../../../core/services/core-module-provided.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productListRootProvidedService: ProductListRootProvidedService,
    private productListModuleProvidedService: ProductListModuleProvidedService,

    private productsRootProvidedService: ProductsRootProvidedService,
    private productsModuleProvidedService: ProductsModuleProvidedService,

    private coreRootProvidedService: CoreRootProvidedService,
    private coreModuleProvidedService: CoreModuleProvidedService,

    private featureRootProvidedService: FeatureRootProvidedService,
    private featureModuleProvidedService: FeatureModuleProvidedService,

    private providedInAppComponentService: ProvidedInAppComponentService,
  ) { }

  ngOnInit(): void {
    this.productListRootProvidedService.log();
    this.productListModuleProvidedService.log();

    this.productsRootProvidedService.log();
    this.productsModuleProvidedService.log();

    this.coreRootProvidedService.log();
    this.coreModuleProvidedService.log();

    this.featureRootProvidedService.log();
    this.featureModuleProvidedService.log();

    this.providedInAppComponentService.log();
  }
}
