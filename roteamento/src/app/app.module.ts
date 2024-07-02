import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRouteModule } from './app-route.module';
import { PrimeiraPaginaComponentComponent } from './primeira-pagina-component/primeira-pagina-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouteModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
