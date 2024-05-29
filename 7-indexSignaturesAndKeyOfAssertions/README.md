## LESSON 7: Index Signatrues & keyof Assertions
Index Signature used for creating object. Don't know the exact name of the object key. but do know the shapes of the object and declare the type of keys and the type of the values
2. TS tends to know object with signatures, so you can access them dynamically.

```
    interface TransactionObj {
    [index: string]: number  
    }

```
this is index signature: declare all of keys are strings, all of values are numbers. always used for when we don't know the key name exactly, and index is always to be string (An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.). and it could not be a boolean!!

note2: with index signature, you can define readonly , which will prevent the change in the object value later

note3: with index signature, if you access a object key value and this key doesn't exists inside the object, then it will tell you `undefined` without any error.

note4: when you know some object keys must be existed, but want to give TS a hint to define object key value types , you need to use index signatures + the required key value pairs
```
    interface TransactionObj {
        readonly [index: string]: number 
        Pizza: number,
        Books: number,
        Job: number
    }

```

```
interface Student {
    // note: to define undefined because some prop is optional
    [key: string]: string | number | number[] | undefined,
    name:string,
    GPA: number,
    classes?: number[],
}
```


2. keyof Assertion:
if we don't have index signature, then object indexing might get error. how to avoid the error without providing index signature? used `as keyof objectname with type assertion`.
since: `keyof creates a union type of the type literal` with interface defined key types , here , they are string | number | number[] | undefined

```
    interface Student {
  
        name:string,
        GPA: number,
        classes?: number[],
    }

    const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
    }

    for (const key in student) {
        console.log(`${key}: ${student[key as keyof Student]}`)
    }

    // the another way to access the object datatypes union!!
    Object.keys(student).map(key => console.log(`${key}: ${student[key as keyof typeof student]}`))

```
note: the second method `key as keyof Student`, which is the interface, the third method `key as keyof typeof student`, which is the object not interface


the fourth method: to define a function 
```
    const logStudentKey = (student: Student, key: keyof Student): void => {
        console.log(`Student ${key}: ${student[key]}`);
    }

    logStudentKey(student, 'GPA')
    logStudentKey(student, 'name')
    logStudentKey(student, 'classes')

```

method 5: mapping key name with union type `Record<literalkeys, datatype>`,  each stream key will have a string or number type, without defining index signatures

```
    type Streams = 'salary' | 'bonus' | 'sidehustle'
    // here , we use the string literal types as keys . so thekeys now must be three of them and should be string

    type Incomes = Record<Streams , number | string>

    const myIncome: Incomes = {
        salary: 90,
        bonus: 10,
        sidehustle: 5, // must be a number or a string
    }

    // no error 
    console.log(myIncome.salary);
```
it is used for when you want to define only 3 keys with exact keyname and value types. but when looping, you have to `combine keyof Assertions!!`


    

