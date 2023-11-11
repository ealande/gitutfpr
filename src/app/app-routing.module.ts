import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListarComponent } from './item-listar/item-listar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'itens/lista', component: ItemListarComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
