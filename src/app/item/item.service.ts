import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
    private items: Item[] = [];
    private item!: Item;
    private indexItem!: number;
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

    editItem(item: Item, index: number): void{
        if(index >= 0 && index < this.items.length){
            this.items[index] = item;
        }
    }

    deleteItem(index: number): void{
        if(index >= 0 && index < this.items.length){
            this.items.splice(index, 1);
        }
    }

    getItems(): Item[] {
        return this.items;
    }

    setItem(itemEnviado: Item): void{
        this.item = itemEnviado;
    }

    getItem(): Item{
        return this.item;
    }

    setIndex(indexEnviado: number): void{
        this.indexItem = indexEnviado;
    }

    getIndex(): number{
        return this.indexItem;
    }
}

