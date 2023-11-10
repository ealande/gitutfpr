import { Component } from '@angular/core';
import { ItemService } from '../../item.service';



@Component({
  selector: 'app-item-list',
  template: `
    <h2>Lista de Itens</h2>
    <ul>
      <li *ngFor="let item of items; let i = index">
        {{ item }}
        <button (click)="editItem(i)">Editar</button>
        <button (click)="deleteItem(i)">Deletar</button>
      </li>
    </ul>
  `
})
export class ItemListarComponent {
  items: string[];

  constructor(private itemService: ItemService) {
    this.items = itemService.getItems();
  }

  editItem(index: number): void {
    const newItem = prompt('Editar item:', this.items[index]);
    if (newItem !== null) {
      this.itemService.editItem(index, newItem);
    }
  }

  deleteItem(index: number): void {
    this.itemService.deleteItem(index);
  }
}

