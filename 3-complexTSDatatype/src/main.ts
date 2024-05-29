// array datatype
let stringArr = ["one", "hey", "Dave"]; // string[]
/* error: stringArr[0] = 42;
Type 'number' is not assignable to type 'string'.
*/
stringArr[0] = "Tome";
/* error : stringArr.push(42);
Argument of type 'number' is not assignable to parameter of type 'string'. */



let guitars = ["Strat", "Les Paul", 5140]; // (string | number)[]
guitars[0] = 1955;
/* error: guitars[1] = true;
Type 'boolean' is not assignable to type 'string | number'.*/
guitars.unshift("hey"); // add the first element to be "hey"

let mixedData = ["Evm", 1984, true]; // (string | number | boolean)[]

/* 
error: stringArr = guitars;
 Type 'string | number' is not assignable to type 'string'.
    Type 'number' is not assignable to type 'string'.
*/

guitars = stringArr;
mixedData = guitars;
// should be fine (in the reverse assignment), because the large scale dataype array could accept the smaller scale datatype array but the reverse order cannot be true

let test = [];
let bands:string[] = [];
bands.push("Van Helen");
/* 
error: bands.push(2345);
error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'. 
*/


// 2. tuple
let myTuple:[string, number, boolean] = ["haha", 2014, true]; // this is a tuple
let mixed = ["john", 1, false]; // this infer to an array rather than a tuple
mixed = myTuple;
/* 
error: myTuple = mixed;
Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.
  Target requires 3 element(s) but source (myTuple) may have fewer elements
*/

myTuple[1] = 30;
/* myTuple[3] = 30;
error: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
*/

// Objects
let myObj:object;
myObj = [];
console.log(typeof myObj);
myObj = stringArr;
myObj = bands;
myObj = myTuple; // all that assignments should be fine
myObj = {};

const exampleObj = {
    prop1: "Dave",
    prop2: true,
}

/*
error: exampleObj.prop2 = 3;
because number cannot be assigned to a boolean datatype 
*/

// create a new type
type Guitarist = {
    name?: string,
    active?:boolean,
    albums:(string | number)[],
}

// to use this new datatype
let eva: Guitarist = {
    name: "Eddie",
    active: true,
    albums:[2012, 1203, "OUB12"],
}

/* 
error: let eva: Guitarist = {
    name: "Eddie",
    albums:[2012, 1203, "OUB12"],
}
omit some properties to be Guitarist type
*/

let jp:Guitarist = {
    name: "Jimmy",
    active: false,
    albums:[2025, 1398, "jdB12"],
}

// jp = eva;
eva = jp;


let sam:Guitarist = {
    // name: "Sam",
    albums:[2012, "jdsia", "jiasj"],
}

// sam = jp;
// note: now even through sam initally lack a prop, but it still can be assigned by jp ,since they are the same datatype

/*
typescript error:
const greetGuitarist = (guitarist: Guitarist) => {
    console.log(`Hi! ${guitarist.name.toUpperCase()}`);
}

greetGuitarist(sam);

'guitarist.name' is possibly 'undefined'. because now sam name is optional and not provided

*/


// check if the property exists
const greetGuitarist = (guitarist: Guitarist) => {

    return (guitarist.name) ? `Hi! ${guitarist.name.toUpperCase()}`: "Hello";
}

console.log(greetGuitarist(sam));


// Enums: enumerated by index , starting at position 0
enum Grade {
    U = 1, // to change the enumration of an element. other element will adapt to the change accordingly.
    D,
    C,
    B,
    A,
}

console.log(Grade.U) // get 0 (position of U)

