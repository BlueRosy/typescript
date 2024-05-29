import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    // populate to this new FullList instance
    static instance: FullList = new FullList()
    
    constructor (private _list:ListItem[] = []) 
    {}

    get list():ListItem[] {
        return this._list
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    removeItem(id: string): void {
        this._list = this._list.filter((item) => (item.id !== id))
        this.save();
    }

    // to save last session information to the local storage but note that localStorage only accept the string rather than a TS list item
    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    
    load(): void {

        const lastList: string | null = localStorage.getItem("myList")

        if (typeof lastList !== "string"){
            return
        }

        // because the class and list are not the same thing, the parsed list only with 3 fields, but the class will have the setter and getter, so it have to be constucted again like the class
        const parsedList:{_id: string, _item: string, _checked: boolean}[] = JSON.parse(lastList)

        for (let each of parsedList){
            const newListItem = new ListItem(each._id, each._item, each._checked);
            FullList.instance.addItem(newListItem)
        }
        
    }
     

}