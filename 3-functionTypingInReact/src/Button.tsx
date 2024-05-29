import React from "react"
// step1: in typescript, when declaring props, should declare its datatype as well. Benefit: typescript helps prevent mistake

//step4: you can declare the props and their datatypes here, and then apply it to the function again. more clearer code
// step5: make some prop optional by adding ? questionMark ?
// step 6: make flexible proptype by using keyword: any. but it is not a good practice because it can cause lot of question or program to crash !!


// step 9: wrap the same assigned optional value in the type var. you can reuse it as many times
type Color = "bg-pink-300" | "bg-green-200" | "bg-blue-400" | "bg-pink-300";

type ButtonProps = {
    // backgroundColor: string,
    // step 8: when prop only accepting some certain values
    backgroundColor: Color,

    textColor: string,
    // textSize: number;
    textSize: any,
    pillShape?:boolean,
    padding?: number[],
    // step 10: declare an array of number (datatype of ts) or a custom type Color[]
    // step 11: declare a tuple of datatypes. this way, you can specify the number you can pass inside the []
    border?: [string,string, string, string],
}



// note: how you will declare props type in TS and how to use them !!
// step3: another destructing way, directly destructing and assign one by one in (), note: {destructuring varname used in the funct} = props;
// note2: destructuring has to the same name to correspond to every prop
// step7: the default component return a React.JSX.Element. so you don't have to return this type explicitly !!
function Button({
    backgroundColor, 
    textColor, 
    textSize,
    pillShape,
    border,
}:ButtonProps): React.JSX.Element {

    // step2: you can use destructuring
    // const {backgroundColor, textColor} = props;

    // step 6: you can turn a string using string methods. but cannot do anything to number using string method
    // ex. textSize.toUpperCase(); will give an error when it is declard as a number type, if you use any type, then there is no problem but it is not a good practice
    
    // when a get a tuple, we can access each value by indexing
    return <button className={`${backgroundColor} ${textColor} rounded-sm p-2 font-bold text-${textSize}xl  ${border && border[0]} ${border && border[1]} ${border && border[2]} ${border && border[3]} border-orange-500`} >Click me</button>
}

export default Button