import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModuleProvidedService } from './services/feature-module-provided.service';
import { FeatureExportedComponentComponent } from './components/feature-exported-component/feature-exported-component.component';
import { FeatureInnerComponentComponent } from './components/feature-inner-component/feature-inner-component.component';



@NgModule({
  imports: [CommonModule],
  declarations: [
    FeatureExportedComponentComponent,
    FeatureInnerComponentComponent
  ],
  providers: [FeatureModuleProvidedService],
  exports: [FeatureExportedComponentComponent, FeatureInnerComponentComponent],
})
export class FeatureModule { }
