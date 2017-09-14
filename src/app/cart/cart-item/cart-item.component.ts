import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../../item/item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: Item;
  @Input() quantity: number;
  @Output() itemSelected = new EventEmitter<void>();
  @Output() quantityChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.itemSelected.emit();
  }

  onChangeQuantity() {
    this.quantityChanged.emit({id: this.item.id, quantity: this.quantity});
  }
}
