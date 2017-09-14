import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
    items: Item[] = [];
    inventory: {item: Item, quantity: number}[] = [];
    itemsChanged = new Subject<{item: Item, quantity: number}[]>();

    addItem(item: Item, quantity: number) {
        let ind = this.items.indexOf(item);

        if (ind >= 0 ) {
            this.inventory[ind].quantity += +quantity;
        } else {
           this.items.push(item);
           this.inventory.push({item: item, quantity: quantity});
        }
        this.itemsChanged.next(this.inventory.slice());
    }

    getItems() {
        return this.items.slice();
    }

    getInventory() {
        return this.inventory.slice();
    }

    deleteItem(index: number) {
        this.items.splice(index, 1);
        this.inventory.splice(index, 1);
        this.itemsChanged.next(this.inventory.slice());
    }

    changeQuantity(id: number, amount: number) {
        for (let product of this.inventory) {
            if (product.item.id === id) {
                product.quantity = amount;
            }
        }
        this.itemsChanged.next(this.inventory.slice());
    }
}
