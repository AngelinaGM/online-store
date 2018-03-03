import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
    // items: Item[] = [];
    inventory: {item: Item, quantity: number}[] = [];
    itemsChanged = new Subject<{item: Item, quantity: number}[]>();

    addItem(item: Item) {
        let ind = this.inventory.map(el => {return el.item.id}).indexOf(item.id);

        if (ind >= 0 ) {
            this.inventory[ind].quantity += 1;
        } else {
           this.inventory.push({item: item, quantity: 1});
        }
        this.itemsChanged.next(this.inventory.slice());
    }

    getInventory() {
        return this.inventory.slice();
    }

    deleteItem(index: number) {
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
