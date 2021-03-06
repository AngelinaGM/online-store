import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart/cart.service';

import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onSelected() {
    this.cartService.addItem(this.item);
  }
}
