import { Component, OnInit } from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import 'rxjs/Rx';

import { Item } from '../item/item.model';
import { CartService } from '../cart/cart.service';
import { DataStorage } from '../shared/data-storage.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  items: Item[] = [];
  private subscription: Subscription;

  selectedItem: Item = new Item();
  quantity = 0;
  price = 0;

  constructor(private popup: Popup,
              private cartService: CartService,
              private dataStorage: DataStorage) {
               }

  ngOnInit() {
    this.subscription = this.dataStorage.fetchData().subscribe(
      (items: Item[]) => {
        this.items = items;
        this.selectedItem = this.items[0];
      }
    );
  }

  selectItem(item: Item) {
    this.selectedItem = item;
    this.quantity = 1;

    this.price = this.quantity * this.selectedItem.price;
    this.popup.options = {
      header: 'Add to Cart',
      color: '#333'
    };
    this.popup.show(this.popup.options);
  }

  addItemToCart() {
    this.cartService.addItem(this.selectedItem, this.quantity);
    this.popup.hide();
    this.price = 0;
  }

  onChangeQuantity() {
    this.price = this.quantity * this.selectedItem.price;
  }

  getSelectItemImg() {
    return this.selectedItem.imgPath;
  }

}
