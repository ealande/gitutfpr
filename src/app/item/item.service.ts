import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: string[] = [];

  getItems(): string[] {
    return this.items;
  }

  addItem(item: string): void {
    this.items.push(item);
  }

  editItem(index: number, newItem: string): void {
    this.items[index] = newItem;
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}

