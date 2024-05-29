## LESSON 4: Functions
1. type Alias: type alias can be assigned by function alias or `object alias {}`, or another `basic / complex datatype alias` like union or even another `type Alias`
2. `An interface can only extend an object type or intersection of object types with statically known members.` (so it cannot extend a union type alias. or primitive type like `string`. will get error in TS). this is one key difference between type and interface. 
note: interface extension using keyword `extends`, which can extends another object type or interface or combination. type "extension" using `=` equal sign, which can extends any type, basic/ complex datatypes, and any type aliases, interface, or combination, which uses `&`
syntax: 
    ```
        type b = string | number;
        type a = b;
        type 

        // An interface cannot extend a primitive type like 'string'. It can only extend other named object types. interface cannot extend b either.
    ```

3. literal type , syntax : `let a:xxx`
   this means that assign a to a certain value type, so that a can only be equal to certain value, not others
   ```
       
        let myName: 'Dave'; // NOW, myName can only be assigned as 'Dave' value, this part is for declaration rather than assignment value

        myName = 'Jone'; // get an error. since Type '"Jone"' is not assignable to type '"Dave"'.

        let username: 'Dave' | 'John' | 'Amy'; // this declaration means that username can be assigned to only one of the three.

        username = 'John';
        console.log(username);
        username = 'Dave';
        username = 'Amy';
   ```
   note: literal types are useful for `constraining a type to be certain value ranges`. but it is not a type alias, it is just a value !!, it cannot be extends as a type

4. functions: should pass params type. function could be defined as an arrow function, function funname() {}, and anonymous function. `function type can be defined by type alias or interface, althrough the syntax are different !!`
    ```
        const add = (a:number, b: number): number => {
            return a + b;
        }

        // if you don't return anything. it is a void type
        const logMsg = (message: any): void => {
            console.log(message);
        }
    ```
    note: to define a function Alias: please define the structure rather than the content `(p1: dt1, p2: dt2) => dt3`. we can then create a function instance using this type
    ```
        // define a function type through type Alias
        type mathFunction = (a: number, b:number) => number;

        // to apply this function type alias. note: you don't need to imply typing
        let mulitply: mathFunction = (a, b) => {
            return a * b;
        }

    ```
    note2: use interface to define a function type
    ``` 
        // use the  interface to define function type

        interface mathFunctionInterface {
            (a: number, b:number): number;
            // note here the syntax; => to :, 
            but it works the same as 
            the type alias mathFunction
            }

        // to apply the interface, is the same to type alias
        
        let divide: mathFunctionInterface = (a, b) => {
            return a / b;
        }

        logMsg(divide(5, 6));

    ```

5. function (optional parameters) with `?` question mark, but you must do the error handling by dealing with this optional parameters and return sth when the parameter is `undefined`
    ```
        // if some parameters are optional, must put them at the end. the required ones do need to come first 
        const addAll = (a:number, b:number, c?:number): 
        number => {
            // solution 
            if (typeof c !== "undefined")
            {
                return a + b + c;
                // error: 'c' is possibly 'undefined'.
            }
            // error: Function lacks ending return statement and return type does not include 'undefined'.

            // solution: 
            return a + b;

        }

    ```
    note1: if you have optional params inside the function, please do error handling
    note2: optional params must be put `last of the params list`
    note3: optional value should never appear simulateously with the initial default value if you have set up

6. function with default value
    ```
        const sumAll = (a: number, b: number, c: number = 2) => {
            return a + b + c;
        }

        logMsg(sumAll(2,3))

        const sumAll = (a: number = 10, b: number, c: number = 2) => {
        return a + b + c;
        }

        logMsg(sumAll(undefined,5,6))
    ```
    note: default value `cannot exist with optional ? simulateously!!` Parameter cannot have question mark and initializer.

    note2: default value can be passed to any params in any order, if the para not in the final order, then passing `undefined` to tell the compiler that this value should be passed by default value

    note3: function instance defined by type alias or interface class `cannot set a default values` (but `can use question mark` to describe it is optional in the type alias or interface). (error message: A parameter initializer or default value is only allowed in a `function or constructor implementation`.)

7. Rest Params in function. `Rest operator should come at the end`. similar to `optional ? `. Rest is for separating an array into separate individual values
    ```
        // 7. Rest Parameters
        const total = (...nums: number[]) => {
            return nums.reduce((prev, cur) => prev + cur);
        }

        logMsg(total(1,2,3,19))

        const sum = (a: number, ...nums:  number[]) => {
            return a + nums.reduce((prev, cur) => prev + cur);
        }

        logMsg(sum(3,4,5,6))
    ```

8. never: a type used to decribe `throw an error()` or `if that function has an infinite loop inside`.
so one way to help you detect an error is to let TS tell you if this function will return a `never` type, if so, it might be that you create an infinite loop inside the function !
usage: 
  1. when throw an error in a function
  2. test whether your defined function has endless loop
  3. used for function to return anything when there is an undefined value passed (throw an error, error handling when you have defined a function to return specific datatype)
    ```
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

    ```

#### Summary: function can return a type, void if no returned value, or never (if throw an error or have an infinite loop inside the function, pay attention to this)