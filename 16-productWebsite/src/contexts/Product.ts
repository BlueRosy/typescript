// define product to display in the page. unlike the items in cart, these products don't contain amount prop
export interface item {
    id: string,
    // image url
    imgSrc: string,
    // title
    title: string,
    // price
    price: number,

}


export default class Product implements item {
    constructor (
        private _id:string = "",
        private _imgSrc: string = "",
        private _title: string = "",
        private _price: number = 0,
    ){}

    get id():string {
        return this._id;
    }

    set id(id:string) {
        this._id = id
    }

    get imgSrc():string {
        return this._imgSrc
    }

    set imgSrc(imgSrc:string){
        this._imgSrc = imgSrc
    }


    get title():string {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }

    get price():number {
        return this._price
    }

    set price(price: number) {
        this._price = price
    }

}
