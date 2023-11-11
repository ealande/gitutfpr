import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
    private items: Item[] = [];
    private idCounter = 0;

    constructor(){};

    getIdCounter(): number {
        let id = this.idCounter;
        this.idCounter++;
        return id;
    }

    addItem(item: Item): void{
        this.items.push(item);
        console.log(this.items);
    }

    getItems(): Item[] {
        return this.items;
    }
}

