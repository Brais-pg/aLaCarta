import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaComponent } from './carta/carta.component';
import { MenusComponent } from './menus/menus.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  {path: 'index', component:PaginaPrincipalComponent},
  {path: 'carta', component: CartaComponent},
  {path: 'menus', component:MenusComponent},
  {path: 'sobreNosotros', component:SobreNosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
