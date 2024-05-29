"use strict";
class Coder {
    constructor(name, // error TS2300: Duplicate identifier 'name'. now we can remove the first line name:string;
    music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Rose = new Coder('Rose', 'Country Music', 26);
console.log(Rose.getAge());
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
    constructor(computer, name, music, age) {
        // Constructors for derived classes must contain a 'super' call. (super must come first before we try to assign anything else , which inherited from parent class)
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        // since lang is protected, so it can be acessed by the parent class and its all subclasses.
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'Guitar');
console.log(Page.play('strums'));
// section 4: static keyword
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
        // first count increment by 1, then assign to this.id. this.id = Peeps.count++; means first id = count, then count+1
    }
}
// static keyword means count dones't apply to any initalisation. this only belong to this class itself rather than any instance of the class
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count); // return 3
console.log(John.id);
console.log(Amy.id);
// section 5: getter and setter
// in react, just ignore this and use function-based component and use hooks to implement all of these
class Bands {
    constructor() {
        this.dataState = [];
    }
    // make private prop read only
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(e => typeof e === "string")) {
            this.dataState = value;
            return;
            // setter cannot return a value
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
// setter
MyBands.data = ['Neil Young', 'Led Zep'];
// getter
console.log(MyBands.data);
// add new band
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
