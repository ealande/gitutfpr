import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item/item.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.scss'],
})
export class ItemListarComponent implements OnInit {
  listaItens: Item[] = [];
  constructor(private itemService: ItemService, private router: Router) {
  }

  ngOnInit(): void { 
    this.listaItens = this.itemService.getItems();
  }

  navegarItem(item: Item, index: number): void{
    this.itemService.setItem(item);
    this.itemService.setIndex(index);
    this.router.navigate(['/item-form']);
  }

  deletarItem(index: number): void{
    this.itemService.deleteItem(index);
  }

}
