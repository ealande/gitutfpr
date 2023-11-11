
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { ItemListarComponent } from './item/item-listar/item-listar/item-listar.component';
import { HomeComponent } from './home/home.component';
import { ItemCadastrarEditarRoute } from './item/item-cadastrar-editar/item-cadastrar-editar.module';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "itens", component: ItemListarComponent },
  { path: "itens/cadastrar", component: ItemCadastrarEditarRoute },
  { path: "itens/editar/:id", component: ItemCadastrarEditarRoute }
=======
import { ItemListarComponent } from './itemListar/item-listar.component';

const routes: Routes = [
  { path: 'itens/listar', component: ItemListarComponent },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

