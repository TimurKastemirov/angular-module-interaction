import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModuleProvidedService } from './services/core-module-provided.service';
import { CoreExportedComponentComponent } from './components/core-exported-component/core-exported-component.component';
import { CoreInnerComponentComponent } from './components/core-inner-component/core-inner-component.component';



@NgModule({
  imports: [CommonModule],
  declarations: [
    CoreExportedComponentComponent,
    CoreInnerComponentComponent
  ],
  providers: [CoreModuleProvidedService],
  exports: [CoreExportedComponentComponent, CoreInnerComponentComponent],
})
export class CoreModule { }
