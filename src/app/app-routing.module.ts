import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListarComponent } from './item-listar/item-listar.component';

const routes: Routes = [
  { path: 'itens/lista', component: ItemListarComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
