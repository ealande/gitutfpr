import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private itensSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  itens$: Observable<Item[]> = this.itensSubject.asObservable();

  adicionarItem(item: Item): void {
    const itens = [...this.itensSubject.value, item];
    this.itensSubject.next(itens);
  }

  editarItem(index: number, novoItem: Item): void {
    const itens = [...this.itensSubject.value];
    itens[index] = novoItem;
    this.itensSubject.next(itens);
  }

  deletarItem(index: number): void {
    const itens = this.itensSubject.value.filter((_, i) => i !== index);
    this.itensSubject.next(itens);
  }
}

