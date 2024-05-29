class Coder {
    // name: string
    // music:string
    // age: number
    // lang: string
    // if you don't have the constructor, then TS doesn't like to declare name here
    // but if  you only have the constructor without this line in the TS, TS doesn't like it too. so even though it seems to be redundant, we must write both
    // we need to write the property in the constructor here
    secondLang!: string; // know what we are doing, but not gonna initialize it right away!

    constructor(
        public readonly name:string,  // error TS2300: Duplicate identifier 'name'. now we can remove the first line name:string;
        public music:string, 
        private age:number, 
        protected lang:string = 'Typescript'){
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }


    public getAge(){
        return `Hello, I'm ${this.age}`
    }
}

const Rose = new Coder('Rose',
                        'Country Music', 
                        26)

console.log(Rose.getAge())
/*
error:
console.log(Rose.age);
Property 'age' is private and only accessible within class 'Coder'.

but in JS, it is still valid
*/

/*
error:
console.log(Rose.lang);
Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.

but in JS, it is still valid!
*/

// part 2: subclass
class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number)
        {
            // Constructors for derived classes must contain a 'super' call. (super must come first before we try to assign anything else , which inherited from parent class)
            super(name, music, age);
            this.computer = computer;

        }

        public getLang() {
            // since lang is protected, so it can be acessed by the parent class and its all subclasses.
            return `I write ${this.lang}`;
        }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25)
console.log(Sara.getLang());


// section 3: implement interface
interface Musician {
    // two props and one method
    name:string,
    instrument: string,
    play(action:string):string,
}

class Guitarist implements Musician {
    // class implements the interface must include all props and methods inside the interface
    name: string;
    instrument: string;
    
    constructor(name:string, instrument:string)
    {
        this.name = name;
        this.instrument = instrument;
    }

    play(action:string):string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist('Jimmy', 'Guitar');
console.log(Page.play('strums'))



// section 4: static keyword
class Peeps {
    // static keyword means count dones't apply to any initalisation. this only belong to this class itself rather than any instance of the class
    static count: number = 0;

    static getCount(): number{
        return Peeps.count;
    }

    public id: number;

    constructor(public name:string){
        this.name = name;
        this.id = ++Peeps.count;
        // first count increment by 1, then assign to this.id. this.id = Peeps.count++; means first id = count, then count+1
    }
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log(Peeps.count); // return 3
console.log(John.id);
console.log(Amy.id);


// section 5: getter and setter
// in react, just ignore this and use function-based component and use hooks to implement all of these
class Bands {
    private dataState: string[];

    constructor(){
        this.dataState = [];
    }

    // make private prop read only
    public get data(): string[]{
        return this.dataState;
    }

    public set data(value:string[]){
        if (Array.isArray(value) && value.every(e => typeof e === "string")){
            this.dataState = value;
            return;
            // setter cannot return a value
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands();
// setter
MyBands.data = ['Neil Young', 'Led Zep']
// getter
console.log(MyBands.data);
// add new band
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data);




