## LESSON 8: Generic
1. create a generic function
```
    const echo = <T>(arg: T):T => arg
```
here, T means you can pass any datatype.

2. create a generic interface (for using as a custom type and passing into the function as generic type extension)
```
    // generic interface
    interface BoolCheck<T> {
        value: T,
        is:boolean,  
    }

    const checkBoolValue = <T>(arg: T):BoolCheck<T> => {
        if (Array.isArray(arg) && !arg.length){
            return {value: arg, is: false};
        }
        if (isObj(arg) && !Object.keys(arg as keyof T).length){
            return {value: arg, is:false};
        }
        return {value: arg, is: !!arg}
    }


        // the third example
    interface HasID {
        id:number,
    }

    // narrow the generic type into HasId
    const processUser = <T extends HasID>(user: T):T => {
        return user
    }

```
note: if you directly return the defined interface, then you must return the same interface with exactly same props inside the interface. However, if you return the generic type that extends the interface, then you can return a type that include the props of interface, but not exactly equal the props of interface

3. generic function key could be more than one
```
    const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

```


4. generic class (you can specify the generic types you can accept later in your instance)

```
    // genric class
class StateObject<T> {
    private data: T

    constructor(value:T){
        this.data = value
    }

    public get state():T {
        return this.data;
    }

    // A 'set' accessor cannot have a return type annotation. so do not provide a return type for setter
    public set state(newdata: T) {
        this.data = newdata;
    }
}

const store = new StateObject("John");
    console.log(store.state)
    store.state = "Dave";

    /* error:
    store.state = 12;

    Type 'number' is not assignable to type 'string'. because after the initalization, it has been automatically defined as string, to prevent this , we can at first, to define the T types we can accept
    */


    const myState = new StateObject<(string | number | boolean | boolean)[]>([15])
    console.log(myState.state);
    myState.state = [23, "fullmoon", true];
    console.log(myState.state);


```