// 1. Partial: a generic type that will return some but not all of props in T

interface Assignment {
    studentId: string,
    title: string,
    grade:number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate:Partial<Assignment>): Assignment =>
{
    return {...assign, ...propsToUpdate};
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

// note: partial can include one to all props inside a type alias or interface
console.log(updateAssignment(assign1, {grade: 95, studentId: "compsci234"}))
const assignGrade: Assignment = updateAssignment(assign1, {grade: 95})


// 2. Required and Readonly

// Required make all properties inlcuding necessary and optional props all required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database
    return assign
}

// Readonly: make all propeties in the generic type readonly
const assignVerified: Readonly<Assignment> = {
    ...assignGrade, verified: true
}

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

console.log(recordAssignment({...assignGrade, verified: true}))


// 3. Record<K, T>: Construct a type that with a set of properties (k) with T as its value type
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";
const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U",
}

// assign Students with Grades interface
interface Grades {
    assign1: number,
    assign2: number,
}
const gradeData: Record<Students, Grades> = {
    Sara: {
        assign1: 95,
        assign2: 80
    },
    Kelly: {
        assign1: 90,
        assign2: 100,
    }
}


// 5. Pick and Omit: applying to the object interface we have generated, pick or omit some of props, they are the new type that is under the subset of props inside the interface

// Pick<T, K extends keyof T> pick a set of properties who are in the union of T
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 87,
}

// Omit<T, K extends keyof T> omit A set of props who are in the union of T
type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "final project",
}

// 6. Exclude and Extract: applying for string literal union types

// Exclude<T, U> from T those types are assignable to U
type adjustedGrade = Exclude<LetterGrades, "U" | "A">

// Extract<T, U> extract from T those types belongs U
type highGrade = Extract<LetterGrades, "A" | "B" >


// 7. Nonnullable: apply to the string literal union, only accept those nonnull and defined string literal types
type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>


// 8. ReturnType: used for creating a new type = function returned type (based on the output of a function type)
// type newAssign = {title: string, points: number}
const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// 9. Parameters: derive the parameters in the  function type in tuple (based on the inputs of  a function type)

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 90]

const tsAssign2: newAssign = createNewAssign(...assignArgs)

console.log(tsAssign2)

// 10. Awaited - helps us with the ReturnType of a Promise
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}
const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(
        res => {
            return res.json()
        }
    ).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })

    return data

}

// this version will get Promise<User[]>, but we don't want the Promise, we just want the returned type
type FetchUserReturnType = ReturnType<typeof fetchUsers>
type FetchUserReturnTypewithoutPromise = Awaited<ReturnType<typeof fetchUsers>>
fetchUsers().then(users => console.log(users))





