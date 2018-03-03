export class Item {
    id: number;
    name: string;
    price: number;
    imgPath: string;

    constructor(id?: number, name?: string, price?: number, imgPath?: string) {
        if (id) {
            this.id = id;
        } else {
            this.id = 0;
        }
        if (name) {
            this.name = name;
        } else {
            this.name = '';
        }
        if (price) {
            this.price = price;
        } else {
            this.price = 0;
        }
        if (imgPath) {
            this.imgPath = imgPath;
        } else {
            this.imgPath = '';
        }
    }
}
