"use strict";
const echo = (arg) => arg;
// this a generic function, T means any type. this is overall syntax
const isObj = (arg) => {
    // object could kv pairs, or array, or null
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
// when can pass any of datatypes here
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(checkBoolValue(false));
console.log(checkBoolValue(0));
console.log(checkBoolValue(true));
console.log(checkBoolValue(1));
console.log(checkBoolValue('Dave'));
console.log(checkBoolValue(''));
console.log(checkBoolValue(null));
console.log(checkBoolValue(undefined));
console.log(checkBoolValue({}));
console.log(checkBoolValue({ name: 'Dave' }));
console.log(checkBoolValue([]));
console.log(checkBoolValue([1, 2, 3]));
console.log(checkBoolValue(NaN));
console.log(checkBoolValue(-0));
// narrow the generic type into HasId
const processUser = (user) => {
    return user;
};
// any class just extends that HasID interface, would be fine, which means just forcing a suer to have an id attribute but beyond that, we could have other props like name, age, ```
console.log(processUser({ id: 1, name: 'Dave' }));
/*
error:
console.log(processUser({name:'Dave'}))
error TS2353: Object literal may only specify known properties, and 'name' does not exist in type 'HasID'.
*/
// user two generic key T and K, this will return any single key field array of users
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const users = [
    {
        id: 1,
        name: "Rose",
        email: "djisaj@outlook.com",
        phone: "3213-3482-2321",
    },
    {
        id: 2,
        name: "fullmoon",
        email: "fullmoon123@outlook.com",
        phone: "3213-000-0000",
    },
    {
        id: 3,
        name: "Tommy",
        email: "Tommy1242@outlook.com",
        phone: "3213-0984-2822",
    },
    {
        id: 4,
        name: "Rommza",
        email: "Rom@outlook.com",
        phone: "70892-233-2321",
    }
];
console.log(getUsersProperty(users, "email"));
console.log(getUsersProperty(users, "name"));
console.log(getUsersProperty(users, "id"));
// genric class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    // A 'set' accessor cannot have a return type annotation. so do not provide a return type for setter
    set state(newdata) {
        this.data = newdata;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
/* error:
store.state = 12;

 Type 'number' is not assignable to type 'string'. because after the initalization, it has been automatically defined as string, to prevent this , we can at first, to define the T types we can accept
*/
const myState = new StateObject([15]);
console.log(myState.state);
myState.state = [23, "fullmoon", true];
console.log(myState.state);
