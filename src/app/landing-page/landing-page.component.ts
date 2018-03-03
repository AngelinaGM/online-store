import { Component, OnInit } from '@angular/core';
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

  constructor(private dataStorage: DataStorage) {
               }

  ngOnInit() {
    this.subscription = this.dataStorage.fetchData().subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    );
  }
}
