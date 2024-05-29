## TypeScript 
This directory is for typescript learning. some projects include to-do-list app and shopping website.

Typescript is the superset of JS. in Essence, it is JS. it just has some properties that helps developers write better JS codes

`Required:` vscode (editor), node.js (or npm package)

`installation` Typescript globally (should be inside your project folder)

```
    npm i typescript -g
```

`file name extension`:
1. .ts (typescript file)
2. .tsx (typescript extension)

`to execute typescript`:
1. write a .ts file
2. convert/compile it into .js file
```
    tsc file.ts file.js
    tsc file.ts // we don't need to provide the filename for .js is they are the same name

    tsc file.ts -w // continue to watch any changes in .ts , any changes will update in the .js continously without compile it again and again (start the incremental compilation)

```
3. see any changing code from .ts to .js
```
 e.g. let username = "Rose"; -> var username = "Rose";

 // note: we have a problem in main.ts: cannot declare block-scale variable username. since we open both main.ts and main.js file and have the same variable name in both file. but if we close the .js file, then the error message will be gone

```
typescript can compile js to be compatible with older browsers

#### typescript default properties:
1. convert `let -> var` when converting .ts to .js 
2. if you don't recompile .ts -> .js file, and change the code in .ts, you cannot see any changes inside the html file !!
`note: you can prevent these default behaviors by changing the tsconfig.json file`



#### 1. .JSX -> .TSX 
from javascript extension to typeScript extension

#### 2. Typing variable
one property of typescipt is to declare a variable with a `certain datatype`. once this var is assigned and identified as a certain datatype, it cannot be assigned to another datatype !!

```
// implicitly declare a datatype by language inference
     let phone = "231-3213-2133";
// this should be assigned as string

     phone = 23;
// get error because phone is an string but now be assigned a number value

// you can also explicitly assign a datatype
     let phone: string = "231-3213-2133"; 

```

#### 3. Typing functions
typing function with params is also required to declare params types, otherwise typescript cannot identify which type should be assigned to a parameter

```
// declare a function with params
    function convertCurrency(amount: number, currency: string){

    }

// declare a function with params and its returned result
    
    function convertCurrency(amount: number, currency: string): number {
            // now it must return a number. but you don't have to declare the specific return type
    }

// use a function
convertCurrency(100, "USD");
convertCurrency("RMB", "USD"); // get error because "Argument of type "string" is not assignable to parameter of type "number"
```

#### TypeScript datatypes
1. basic js datatypes: string, number, boolean
2. question mark: one or zero
3. any: any datatype
4. a | b | c: any of these options, this can be assigned as type var = a | b | c; (custom type)
5. array: number[], string[], boolean[], or custom type[] ``` (cannot control how many an user will input in an array)
6. tuple: [number, number, number], or [string, string, string, string] ```, you can specify the count of datatypes inside an array, so that you can control user input number and its datatype.



#### `Project Demo`: 

<img src="./11-toDoListProjectwithTs/todolistDemo.gif" width="200" />

<img src="./16-productWebsite/shoppingWebsiteDemo.gif" width="600" />
<br>
<br>
