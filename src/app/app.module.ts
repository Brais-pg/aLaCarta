import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { FlexLayoutModule } from '@angular/flex-layout';

import { CartaComponent } from './carta/carta.component';
import { MenusComponent } from './menus/menus.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    MenusComponent,
    SobreNosotrosComponent,
    PaginaPrincipalComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule, 
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
