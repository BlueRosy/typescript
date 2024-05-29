LESSON 2: learning ts basic terminologies

1. Strongly Typed Languages vs Loosely Typed Languages

    - `Strongly Typed Languages`: demand the specification of data types, (e.g. typescipt is exactly a strongly typed lanugages which required to specify the datatype of a var)

    - `Loosely Typed Languages`: don't require type specification (e.g. JS is a case. aka `weakly typed language`)

2. static typing vs dynamic typing (related to the strongly typed / loosely typed language but not the same idea)
`so a language that is strongly typed can be either statically or dynamically typed !!`

    -  `statically typed language`: types are checked at compiled time. (ts as an example)
    - ` dynamic typed language`: types are checked at run time (js as an example)

3. some TS benefits:
    - self-documenting code
    - catch errors in the development
    - great for teams

4. how typescript infer the datatypes
   - if you don't assign a type to the var, then it will infer the datatype (implicitly)
   - if you assign a type using `let var:datatype = value`, then ts doesn't need to infer, you have declare a datatype (explicitly)
   ```
    // declare datatype and assign value explicitly
    let myName: string = 'Rose';

    // only declare datatype
    let myName: string;
   ```
   - either way, after the ts has given a var a datatype, it will follow this suit, so later when you assign it to be another datatype value, `then there will be an error message: Type 'x' is not assignable to type 'y'.` 

5. ts basic datatypes:
  - string
  - number
  - boolean
  - any // this is a datatype, which means any of datatypes will be fine (defeat ts properties of strongly typed language). also, `if typescript cannot infer any datatype for a var, then it will assign it to any type`
  - function // this must be `explicitly declare a datatype for params when passing params`, otherwise ts cannot identify which type should these parames assigned, it will assign them to any datatype. and generate an error message. when you declare datatypes for params, `ts will implicitly infer the returned datatype. `
    ```
        const sum = (a, b) => {return a + b} // error in TS
        const sum = (a: number, b: number) => {return a + b} // solution in TS. TS infer returned value to be a number

    
        const sum1 = (a: number, b: string) => {return a + b}; // ts infer the returned value to be a string

    ```
 - union: `datatype1 | datatype2 | datatype3`, any type inside the set (means `or` , either these types listed is fine). union is not limited to 2, it can be more than 2
 - RegExp: regular expression , `sometimes, if you don't know how to express the value type you want to assign later, just give the value to a var, and let ts to tell you implicitly what the datatype it should be`
    ```
        let re: RegExp = /\w+/g;
    ```



