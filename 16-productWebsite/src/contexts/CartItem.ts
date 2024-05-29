import { item } from "./Product"

// items in cart

export interface cartitemInterface extends item {
    amount: number
}

export class CartItem implements cartitemInterface {
    constructor (private _id: string,
                 private _imgSrc: string,
                 private _title: string,
                 private _price: number,
                 private _amount: number = 1){}

    
    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    get imgSrc(): string {
        return this._imgSrc
    }

    set imgSrc(imgSrc: string) {
        this._imgSrc = imgSrc
    }

    get title(): string {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }

    get price(): number {
        return this._price
    }

    set price(price: number){
        this._price = price
    }

    get amount(): number {
        return this._amount
    }

    set amount(amount: number) {
        this._amount = amount
    }
}