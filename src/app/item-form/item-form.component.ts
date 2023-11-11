import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemService } from '../item/item.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
    nomeItem!: string;
    isEditing = false;
    itemId!: number;

    constructor(private itemService: ItemService, private _snackBar: MatSnackBar){}
    
    ngOnInit(): void {
        let itemToEdit = this.itemService.getItem();
        if(itemToEdit){
            this.nomeItem = itemToEdit.nome;
            this.itemId = itemToEdit.id;
            this.isEditing = true;
        } else{
            this.nomeItem = "";
            this.isEditing = false;
        }
    }

    saveItem(): void {
        let idItem = this.isEditing ? this.itemId : this.itemService.getIdCounter();
        const itemAdd = {
            id: idItem,
            nome: this.nomeItem
        } as Item;
        
        if(this.isEditing){
            let index = this.itemService.getIndex();
            this.itemService.editItem(itemAdd, index);
            this._snackBar.open("Item editado com sucesso");
        } else {
            this.itemService.addItem(itemAdd);
            this._snackBar.open("Item salvo com sucesso");
        }

        this.nomeItem = "";
    }

}
