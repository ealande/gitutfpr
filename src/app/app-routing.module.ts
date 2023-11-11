import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListarComponent } from './item-listar/item-listar.component';


const routes: Routes = [
  { path: 'itens/lista', component: ItemListarComponent },
  { path: '', component: HomeComponent },
  { path: 'item-form', component: ItemFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
