import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DeclaredInAppModuleComponent } from './components/declared-in-app-module/declared-in-app-module.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({ key: 'value', anyKeys: 'anyStringValues' }),
  ],
  declarations: [
    AppComponent,
    DeclaredInAppModuleComponent
  ],
  exports: [
    DeclaredInAppModuleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
