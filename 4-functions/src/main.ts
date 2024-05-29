// type aliases. type alias can be assigned by function alias or object alias, or another basic / complex datatype alias

type stringOrNumber = string | number; // type can be used to express a union type

type stringOrNumberArray = (string | number)[];



type Guitarist = {
    name?: string,
    active:boolean,
    albums:(string | number)[],
}


// we can assign another type alias to the new type alias
type UserId = stringOrNumber; 


// note one key difference between type alias vs interface, (interface cannot extend union type, but type can )

/* 
error:
interface PostId extends stringOrNumber {};

An interface can only extend an object type or intersection of object types with statically known members.
*/

// 3. Literal types

/*Error
let myName: 'Dave';
myName = 'Jone';
Type '"Jone"' is not assignable to type '"Dave"'.
*/

let username: 'Dave' | 'John' | 'Amy'; // username can only be assigned by one of three names. they cannot be changed interactively
username = 'John';
console.log(username)
username = 'Dave';
console.log(username);
username = 'Amy'
console.log(username);
username = 'Dave';
console.log(username);


// 4. functions
const add = (a:number, b: number): number => {
    return a + b;
}

// if you don't return anything. it is a void type
const logMsg = (message: any): void => {
    console.log(message);
}

logMsg("Hello, fullmoon");
logMsg(add(2,3));

let subtract = function (c: number, d:number): 
number {
    return c - d;
}

logMsg(subtract(3, 1));

// define a function type through type Alias
type mathFunction = (a: number, b:number) => number;

// to use this type. you don't need to pass any params typing
let mulitply: mathFunction = (a, b: number) => {
    return a * b;
}

logMsg(mulitply(3, 2));




// use the  interface to define function type
interface mathFunctionInterface {
    (a: number, b:number): number;
    // note here the syntax; => to :, but it works the same as the type alias mathFunction
}

// to apply the interface, is the same to type alias
let divide: mathFunctionInterface = (a, b) => {
    return a / b;
}

logMsg(divide(5, 2));


// 5. function - optional parameters
const addAll = (a:number, b:number, c?:number): 
number => {
    // solution 
    if (typeof c !== "undefined")
    {
        return a + b + c;
        // 'c' is possibly 'undefined'.
    }
    // Function lacks ending return statement and return type does not include 'undefined'.
    return a + b;

}

// 6. function - default value (note: default value cannot exist with optional ? simulateously!! Parameter cannot have question mark and initializer.)
const sumAll = (a: number = 10, b: number, c: number = 2) => {
    return a + b + c;
}

logMsg(sumAll(undefined,5,6))



// 7. Rest Parameters
const total = (...nums: number[]) => {
    return nums.reduce((prev, cur) => prev + cur);
}

logMsg(total(1,2,3,19))

const sum = (a: number, ...nums:  number[]) => {
    return a + nums.reduce((prev, cur) => prev + cur);
}

logMsg(sum(3,4,5,6))

// 8. when you create a function that throw an error, then it will return 'never' type
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

// 9. when a function has a infinite loop / endless loop inside, return a 'never' type
const infinite = ()  => {
    let i: number = 1;
    while(true){
        i++;
        // the solution of an infinit loop, now the returned type -> void
        if (i >= 100) break;
    }
}

const isNumber = (value: any): boolean => {
    return typeof value === "number"? true: false;
}

const isString = (value: any): boolean => {
    return typeof value === "string"? true: false;
}


const numberOrString = (value: number | string):
string => {
    if (isString(value)) return 'string';
    if (isNumber(value)) return 'number';
    // error TS2366: Function lacks ending return statement and return type does not include 'undefined'
    // return createError("This should return happen")
    // this is the function to throw a new Error
    throw new Error("This should never happen!")
}
