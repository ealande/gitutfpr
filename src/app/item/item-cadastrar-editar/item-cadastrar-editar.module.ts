import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ItemCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    ItemCadastrarEditarRoute,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ItemCadastrarEditarRoute { }
