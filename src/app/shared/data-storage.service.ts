import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Item } from '../item/item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorage {
    constructor(private http: Http) {}

    fetchData() {
        return this.http.get('assets/products.json')
            .map((response: Response) => {
                let items: Item[] = [];
                for (let responseItem of  response.json()) {
                    items.push(new Item(responseItem.product_id, responseItem.name, +responseItem.price, responseItem.imagePath));
                }
                return items;
            });
    }
}
