import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatExpansionModule } from '@angular/material/expansion';

import { CartaComponent } from './carta/carta.component';
import { MenusComponent } from './menus/menus.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    MenusComponent,
    SobreNosotrosComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
