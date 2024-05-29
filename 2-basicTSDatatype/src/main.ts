// two ways to declare var and assign datatype
let myName: string;
myName = "Dave";
myName = "John";

let yourName: string = "Rose";

/* myName = 42;
error: Type 'number' is not assignable to type 'string'.
*/

let meaningOfLife: number;
let isLoading: boolean;
let album: any; // allow anytype to be fine!!
let version: string | number; // union type , select one from the set, version is either string or number , but not any other types
meaningOfLife = 42;
isLoading = true;
album = "";
version = 3;
version = "v3";

/* in js this function naming is normal but in the ts, it will make an error TS7006: Parameter 'b' implicitly has an 'any' type. because ts cannot infer any type to be assigned to b here.
 
    const sum = (a, b) => {return a + b}

 */

// solution is to declare datatypes explicitly in JS. typescript infer this function will return a number
const sum = (a: number, b: number) => {return a + b};

// this function, ts infer the returned value to be a string
const sum1 = (a: number, b: string) => {return a + b};


let postId: string | number; // "1" or 1
let isActive: number | boolean; // (0 or 1)

let re: RegExp = /\w+/g;