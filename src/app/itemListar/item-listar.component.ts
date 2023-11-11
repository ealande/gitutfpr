import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemService } from '../itemService/item.service';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.scss'],
})
export class ItemListarComponent implements OnInit {
  itens$: Observable<Item[]>;

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

