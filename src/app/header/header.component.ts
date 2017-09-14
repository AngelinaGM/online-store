import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CartService } from '../cart/cart.service';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  total = 0;
  quantity = 0;
  private subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.itemsChanged.subscribe(
      (items: {item: Item, quantity: number}[]) => {
        this.total = 0;
        this.quantity = 0;
        for (let item of items) {
            this.total += item.item.price * item.quantity;
            this.quantity += +item.quantity;
        };
      }
    );
  }
}
