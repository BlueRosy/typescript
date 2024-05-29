// 1. Index Signatures

interface TransactionObj {
    Pizza: number,
    Books: number,
    Job: number,
}

interface TransactionObj {
    // readonly will just allow the first initialization but not update the object value later on!!!
    readonly [index: string]: number // this is index signature: declare all of keys are strings, all of values are numbers. 
    // always used for when we don't know the key name exactly, and index is always to be string(An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.). and it could not be a boolean!!
}


const todaysTransactions:TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 90,
}

/*
error: 
todaysTransactions["Pizza"] = 40;
Index signature in type 'TransactionObj' only permits reading.
*/

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
console.log(todaysTransactions['Dave']); // don't return any error, just return undefined!!


let index:string = 'Pizza';
console.log(todaysTransactions[index])
/*
error: when we don't use index signiture
let index:string = 'Pizza';
console.log(todaysTransactions[index])
error TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
  No index signature with a parameter of type 'string' was found on type 'TransactionObj'. 错误：string不能作为index，because we don't create an index signature
*/

const todayNet = (transactions: TransactionObj): number => {
    let total:number = 0;
    for (const transaction in transactions){
        total += transactions[transaction];
    }
    return total;
}

console.log(todayNet(todaysTransactions))

// 2. 
interface Student {
    // [key: string]: string | number | number[] | undefined,
    name:string,
    GPA: number,
    classes?: number[],
}


const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
}

// console.log(student.test)


for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
    // if don't have index signature, then might get error. how to avoid the error without providing index signature? used `as keyof objectname with type assertion`
    // keyof creates a union type of the type literal with your defined key types , here , they are string | number | number[] | undefined
}


// third method
Object.keys(student).map(key => console.log(`${key}: ${student[key as keyof typeof student]}`))


// the fourth method: to define a function 
const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'GPA')
logStudentKey(student, 'name')
logStudentKey(student, 'classes')

// last example
// interface Incomes {
//     [key: string]:number,

// }

// mapping key name with union type,  each stream key will have a string or number type, without defining index signatures
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

// but still nedd to use keyof when looping
for (const key in myIncome) {
    console.log(`${key}: ${myIncome[key as keyof Incomes]}`)
}


 

