import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.scss'],
})
export class ItemListarComponent implements OnInit {
  listaItens: Item[] = [];
  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void { 
    this.listaItens = this.itemService.getItems();
  }

}
