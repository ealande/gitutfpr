import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';
import { ItemService } from '../item-service/item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.scss'],
})
export class ItemListarComponent implements OnInit {
  itens$: Observable<Item[]>;

  mockItens: Item[] = [
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
    { id: 3, nome: 'Item 3' },
  ];
  constructor(private itemService: ItemService) {
    this.itens$ = this.itemService.itens$;
  }

  ngOnInit(): void { }

  editarItem(index: number, novoItem: Item): void {
    this.itemService.editarItem(index, novoItem);
  }

  deletarItem(index: number): void {
    this.itemService.deletarItem(index);
  }
}
