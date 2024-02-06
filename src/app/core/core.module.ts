import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
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
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(value: Record<string, string>): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [{ provide: 'coreValue', useValue: value }],
    };
  }
}
