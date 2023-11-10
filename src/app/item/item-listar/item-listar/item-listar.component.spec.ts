import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-listar.component';

describe('ItemListarComponent', () => {
  let component: ItemListarComponent;
  let fixture: ComponentFixture<ItemListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListarComponent]
    });
    fixture = TestBed.createComponent(ItemListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
