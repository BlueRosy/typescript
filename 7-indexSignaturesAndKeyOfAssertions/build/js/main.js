"use strict";
// 1. Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 90,
};
/*
error:
todaysTransactions["Pizza"] = 40;
Index signature in type 'TransactionObj' only permits reading.
*/
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
console.log(todaysTransactions['Dave']); // don't return any error, just return undefined!!
let index = 'Pizza';
console.log(todaysTransactions[index]);
/*
error: when we don't use index signiture
let index:string = 'Pizza';
console.log(todaysTransactions[index])
error TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
  No index signature with a parameter of type 'string' was found on type 'TransactionObj'. 错误：string不能作为index，because we don't create an index signature
*/
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todaysTransactions));
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
    // if don't have index signature, then might get error. how to avoid the error without providing index signature? used `as keyof objectname with type assertion`
    // keyof creates a union type of the type literal with your defined key types , here , they are string | number | number[] | undefined
}
// third method
Object.keys(student).map(key => console.log(`${key}: ${student[key]}`));
// the fourth method: to define a function 
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
logStudentKey(student, 'classes');
const myIncome = {
    salary: 90,
    bonus: 10,
    sidehustle: 5, // must be a number or a string
};
// no error 
console.log(myIncome.salary);
// but still nedd to use keyof when looping
for (const key in myIncome) {
    console.log(`${key}: ${myIncome[key]}`);
}
