import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const product = this._items.filter((el) => el.id == item.id)
        
        if (product.length == 1){
            if (product[0].quantity && item.quantity){
                product[0].quantity += item.quantity
            }
        }
        else {
            this._items.push(item);
        }
    }
    minus(id:number): void {
        const item = this._items.filter((el)=> el.id == id);
     
        if (item[0].quantity) {
            item[0].quantity = item[0].quantity - 1 
            if (item[0].quantity == 0) {
                this.del(item[0].id)
            }
        };
    }

    total(): number {
        let result = 0
        for (let element of this._items) {
            let amount = 1
            if (element.quantity){
                amount = element.quantity
            }
            result += element.price * amount;       
        }
        return result
        // return this._items.reduce((res, item) => res + item.price , 0)
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