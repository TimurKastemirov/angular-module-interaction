import { Component, OnInit } from '@angular/core';
import { ProvidedInAppComponentService } from './services/provided-in-app-component.service';
import {
  ProductListRootProvidedService
} from './pages/products/modules/product-list/services/product-list-root-provided.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProvidedInAppComponentService],
})
export class AppComponent implements OnInit {
  title = 'module-interaction';

  constructor(
    private productListRootProvidedService: ProductListRootProvidedService,
  ) {
  }

  ngOnInit(): void {
    this.productListRootProvidedService.log();
  }
}
