import { Component } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
    nomeItem!: string;

    constructor(private itemService: ItemService){}

    addItem(): void{
        let idItem = this.itemService.getIdCounter();

        const itemAdd = {
            id: idItem,
            nome: this.nomeItem
        } as Item;
        this.itemService.addItem(itemAdd);
    }

}
