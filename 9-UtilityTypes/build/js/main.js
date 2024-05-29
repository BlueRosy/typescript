"use strict";
// 1. Partial: a generic type that will return some but not all of props in T
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
// note: partial can include one to all props inside a type alias or interface
console.log(updateAssignment(assign1, { grade: 95, studentId: "compsci234" }));
const assignGrade = updateAssignment(assign1, { grade: 95 });
// 2. Required and Readonly
// Required make all properties inlcuding necessary and optional props all required
const recordAssignment = (assign) => {
    // send to database
    return assign;
};
// Readonly: make all propeties in the generic type readonly
const assignVerified = Object.assign(Object.assign({}, assignGrade), { verified: true });
/*
error:
assignVerified.grade = 88;
error TS2540: Cannot assign to 'grade' because it is a read-only property.
*/
/*
error:
recordAssignment(assign1);
error TS2345: Argument of type 'Assignment' is not assignable to parameter of type 'Required<Assignment>'.
  Types of property 'verified' are incompatible.
    Type 'boolean | undefined' is not assignable to type 'boolean'.
      Type 'undefined' is not assignable to type 'boolean'.
Verified: required a value to be passed because now it should be required
*/
/*
error:
recordAssignment(assignVerified)
Argument of type 'Readonly<Assignment>' is not assignable to parameter of type 'Required<Assignment>'.
  Types of property 'verified' are incompatible.
    Type 'boolean | undefined' is not assignable to type 'boolean'.
*/
console.log(recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true })));
// 3. Record<K, T>: Construct a type that with a set of properties (k) with T as its value type
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: {
        assign1: 95,
        assign2: 80
    },
    Kelly: {
        assign1: 90,
        assign2: 100,
    }
};
const score = {
    studentId: "k123",
    grade: 87,
};
const preview = {
    studentId: "k123",
    title: "final project",
};
// 8. ReturnType: used for creating a new type = function returned type (based on the output of a function type)
// type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 90];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
