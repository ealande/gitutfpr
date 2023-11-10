import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar.component';

const routes: Routes = [
  {
    path: "item-cadastrar-editar",
    loadChildren: () => import('./item-cadastrar-editar.module').then(m => m.ItemCadastrarEditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCadastrarEditarRoute { }
