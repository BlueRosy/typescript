type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific (should be fine either from larger range to smaller or from smaller to larger range if the assigned value in included in all of these types)
let a: One = 'Hello'; // a type One
let b = a as Two; // casting type from a more specific type to a less specific (now b type = TWO)
let c = a as Three; // casting type from a less specific to a more specific. 


// with <> angel bracket, cannot use it in react .tsx
let d = <One>'world';
console.log(d)
// let e = <Two>d;
let e = <string | number>d;
console.log(e)
// these <> cannot be used in react .tsx file (disallowed)!!!
let g = <Two>d;
console.log(g);


const addOrConcat = (a:number, b:number, c: 'add' | 'concat'): number | string => {
    if (c == 'add'){
        return a + b;
    }
    return '' + a + b;
}

/*
error:
let myVal:string = addOrConcat(2,2,'concat');

Type 'string | number' is not assignable to type 'string'.
  Type 'number' is not assignable to type 'string'.

normally, cannot allow a less specific type to accept a more specific type value

*/

// solution; tell TS it will return a string on certainty
let myVal:string = addOrConcat(2,2,'concat') as string;
console.log(myVal);

// now we cheat to TS, TS think it doesn't have any problem, but we know it has a problem, since the true return should be string, but you force it to be number
// sometimes TS can check  but sometimes like here it cannot check. but it will give some hints if we really want to do this
let nextVal:number = addOrConcat(2,2,'concat') as number;
console.log(typeof nextVal); // string rather than a number. in JS it is valid

/* error:
10 as string; 
error message: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
*/

// if we know we want to cast the type regardless of TS warning!! use double casting or force casting !!
(10 as unknown) as string;

// 3. The DOM (Element least specific < HTMLElement < HTMLImageElement)
const img = document.querySelector('img')!;
// HTMLImageElement | null
const myImg = document.getElementById('#img')!; // HTMLElement | null

/*
error:
img.src
//error TS18047: 'img' is possibly 'null'.
solution is to type assertion
*/

img.src

/*error
myImg.src
Property 'src' does not exist on type 'HTMLElement'.
*/

const myImg2 = document.getElementById("#img") as HTMLImageElement;
myImg2.src // should be fine

const myImg3 = <HTMLImageElement>document.getElementById('#img');
myImg3.src; // should be fine




