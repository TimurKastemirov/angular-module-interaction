import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DeclaredInAppModuleComponent } from './components/declared-in-app-module/declared-in-app-module.component';

@NgModule({
  declarations: [
    AppComponent,
    DeclaredInAppModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  exports: [
    DeclaredInAppModuleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
