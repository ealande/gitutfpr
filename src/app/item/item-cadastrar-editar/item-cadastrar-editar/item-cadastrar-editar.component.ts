import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-cadastrar-editar',
  templateUrl: './item-cadastrar-editar.component.html',
  styleUrls: ['./item-cadastrar-editar.component.scss']
})
export class ItemCadastrarEditarComponent {
  editedItem!: string;

  constructor(private route: ActivatedRoute, private itemService: ItemService) {

    const indexParam = this.route.snapshot.paramMap.get('index');
    const index = indexParam ? +indexParam : 0;

    if (!isNaN(index) && index >= 0 && index < this.itemService.getItems().length) {
      this.editedItem = this.itemService.getItems()[index];
    } else {
      console.error('Invalid index:', index);
    }
  }

  saveChanges(): void {
    const indexParam = this.route.snapshot.paramMap.get('index');
    const index = indexParam ? +indexParam : 0;

    if (!isNaN(index) && index >= 0 && index < this.itemService.getItems().length) {
      this.itemService.editItem(index, this.editedItem);
    } else {
      console.error('Invalid index:', index);
    }
  }
}

