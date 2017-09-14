import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Item } from '../item/item.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartInventory: {item: Item, quantity: number}[] = [];
  private subscription: Subscription;
  total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartInventory = this.cartService.getInventory();
    this.countTotal();
    this.subscription = this.cartService.itemsChanged.subscribe(
      (items: {item: Item, quantity: number}[]) => {
        this.cartInventory = items;
        this.countTotal();
      }
    );
  }

  changeQuantity(event: {id: number, quantity: number}) {
    this.cartService.changeQuantity(event.id, event.quantity);
    this.countTotal();
  }

  deleteItem(i: number) {
    this.cartService.deleteItem(i);
  }

  private countTotal() {
    this.total = 0;
    for (let item of this.cartInventory) {
        this.total += item.item.price * item.quantity;
    };
  }
}
