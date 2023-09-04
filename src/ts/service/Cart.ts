import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    total(): number {
        return this._items.reduce((res, item) => res += item.price, 0)
    }
    totalWithDiscount(discount: number): number {
        return this.total() *(100 - discount) / 100
    }

    del(id: number): void {
        this._items=this._items.filter(_=>_.id!= id ) ;
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}