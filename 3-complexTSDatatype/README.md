LESSON 3: Complex TS datatypes 

1. arrays: `datatype[]`, eg. string[], (union)[], any[]
    ```
        implicitly define:
        let stringArr = ["one", "hey", "Dave"]; // ts infer it to be a string[]

        let guitars = ["Strat", "Les Paul", 5140]; // ts infer it to be a (string | number)[]

        let mixedData = ["Evm", 1984, true]; // ts infer it to be a (string | number | boolean)[]

        let test = []; // ts infer it as any[] because any data can be inside this array

        expilicitly define:
        let bands:string[] = []; 
        bands.push("Van Halen")
    ```
    
    - note: the large scale dataype array could accept the smaller scale datatype array (you can assign a larger scale array = a smaller scale array, but the reverse order cannot be true). 
    - note2: array `has no limited length`. you can either push / unshift it or pop / shift from the array(you can update the array length anytime). but if you want to `fix the length of an array, we need a tuple`

2. tuple: array with fixed length(or fixed element counts) `[datatype1, dt2, dt3, dt4]` to be fixed to four element (e.g. [string, string, string, string])
    ```
        let myTuple:[string, number, boolean] = ["haha", 2014, true];
        let mixed = ["john", 1, false]; // this infer to an array rather than a tuple
        
        // note: we can assign a tuple to an array if they allow the same datatype, but the reverse can not be true. because type has a fixed length. but array has more or fewer elements than what a tuple required 
    ```
    - note: we can assign a tuple to an array (`array = tuple`) if they allow the same datatype, but the reverse can not be true. because type has a fixed length. but array has more or fewer elements than what a tuple required
    - note2: do not try to add or delete an element inside a tuple, because it has the fixed length!!

3. objects: `any complex datatype can be an object`. e.g. [] array, or tuple, so assign anything to an object should be fine. but the reverse can not be true. `standard object: {}`
    ```
        let myObj:object;
        myObj = [];
        console.log(typeof myObj); // object
        myObj = stringArr; // stringArr is a string[]
        myObj = bands;  // bands is []
        myObj = myTuple; //myTuple is a tuple
        
        // all that assignments should be fine

        standard object:
        const exampleObj = {
                prop1: "Dave",
                prop2: true,
                }
        // ts infer it as: {
            prop1: string,
            prop2: boolean,
        }

    ```
4. new custom type (one way: `type alias` keyword: `type`): to define a custom object type: `type typename = {}`, to make a prop to be optional, using `?` question mark !! type alias can be used to refer any type (custom type, union, or primitive types)
    ```
        // to create a new type
        type Guitarist = {
            name: string,
            active:boolean,
            albums:(string | number)[],
        }

        // to make a prop to be optional (e.g active to be optional, using question mark)
        
        type Guitarist = {
            name: string,
            active?:boolean,
            albums:(string | number)[],
        }

        // to use a new type
        let evh: Guitarist = {
            name: "Eddie",
            active: true,
            albums: [1985, 5149, 'OU812'],
        }

    ```
    - note: when creating a new type and declare an instant later on, we cannot omit any of the essential props defined in that new datatype, otherwise, it will get sth wrong!!, also, we cannot simply add a new prop for an instance, that cannot work as well !!
    - note2: even through an instance initally lack a prop, another instance have all props defined, but it still can be assigned to the former ,since they are the same datatype!!
    - note3:` a new custom object type can be used to declare instance / variable or used to define a function (passing as a params datatype)`
    ```
        const greetGuitarist = (guitarist: Guitarist) => {
            console.log(`Hi! ${guitarist.name}`);
        }

        greetGuitarist(sam);

        # function using a custom object
    ```
    - note 4: if you can a attribute of type object to be optional with ?, then if later on you need to call this property.method() but some instances don't have this property. TS will give you an error ('type name' is possibly 'undefined'). similar to interface as well. so the solution 1 is to make `type.name?method()` when you call this optional property 's method !!
    ```
        const greetGuitarist = (guitarist: Guitarist) => {
        console.log(`Hi! ${guitarist.name?.toUpperCase()}`);
        }

        greetGuitarist(sam);
    ```
    the solution 2: to check whether this property exists. 
5. interface( syntax: `interface`) (vs type syntax: `type`):
    - use interface when you think sth is a `class`, when you also have a function in a class 
    - the difference between interface and type is subtle. the key differences are only two (`1. union type cannot be implemented by class and cannot be extends by interface` because both are static and they cannot accept any uncertainty on the properties or methods, and `2. declaration merging`, which means that type can only be declare once , whereas interface can be declared one or more times and all of declaration will be merged together). beyound the two main difference, there are no differences in their usage and functions (even though sometimes, to realize the same functionality, they use difference syntax)
    - suggestion: 
        1. type aliases can act sort of like interfaces, however, there are 3 important differences ( union types, declaration merging)
        2. use whatever suites you and your team, just be consistent
        3. always use interface for public API's definition when authoring a library or 3rd party ambient type definitions (because you allow others to add more properties or features in the interface)
        4. consider using type for your React Component Props and State (prevent public merging in your project)
6. Enums: another feature `unlike most TS features, Enums are not a type-level addition to JS but sth TS added to the language and runtime.`. syntax: `enum varanme`. enum means to enumerate element (the element is in nth position, starting from 0)
    ```
        // Enums: enumerated by index , starting at position 0
        enum Grade {
            U= 1, // to change the enumration of an element. other element will adapt to the change accordingly.
            D,
            C,
            B,
            A,
        }

        console.log(Grade.U) // get 1 (position of U)
    ```
    note1: enum by default will enumerate elements from position 0, but `we can change the enumeration and other elements will adapt to it`.
        










