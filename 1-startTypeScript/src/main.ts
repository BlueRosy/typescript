let username = "Rose";
console.log(username);

let a:number = 12;
let b:string = '6';
let c:number = 2;
console.log(a / b); // this is a valid js version , because js doesn't mind the data coercion between 12 and 6 (js has dynamic data. so it can coerce the data to the type you want). so if you write it in the js, then you will get 2, but in .ts file you will get an error

console.log(c * b);
// The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.