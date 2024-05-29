"use strict";
// two ways to declare var and assign datatype
let myName;
myName = "Dave";
myName = "John";
let yourName = "Rose";
/* myName = 42;
error: Type 'number' is not assignable to type 'string'.
*/
let meaningOfLife;
let isLoading;
let album; // allow anytype to be fine!!
let version; // union type , select one from the set, version is either string or number , but not any other types
meaningOfLife = 42;
isLoading = true;
album = "";
version = 3;
version = "v3";
/* in js this function naming is normal but in the ts, it will make an error TS7006: Parameter 'b' implicitly has an 'any' type. because ts cannot infer any type to be assigned to b here.
 
    const sum = (a, b) => {return a + b}

 */
// solution is to declare datatypes explicitly in JS. typescript infer this function will return a number
const sum = (a, b) => { return a + b; };
// this function, ts infer the returned value to be a string
const sum1 = (a, b) => { return a + b; };
let postId; // "1" or 1
let isActive; // (0 or 1)
let re = /\w+/g;
