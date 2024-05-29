// 1st variation
// const year: HTMLElement | null = document.getElementById('year')  
// const thisyear:string = new Date().getFullYear().toString();
// if (year){
//     year.setAttribute("datetime", thisyear)
//     year.textContent = thisyear
// }



// 2st variation
// const year = document.getElementById('year') as HTMLSpanElement //type casting to clarify the DOM element type
// const thisyear = (new Date().getFullYear() as unknown) as string // must be a string rather than a number, but because number cannot be directly converted to be string , using double casting
// year.setAttribute("datetime", thisyear)
// year.textContent = thisyear