// to type children, which is children tag or contents inside the current tag element (shown in the main.jsx or app.jsx which quote the current tag component)
import React from "react"

// note: React.Node can accept any element e.g. string, or another component "Button1 Button2" or basic JSX element "div a "
type buttonProps = {
    // children: React.ReactNode;

    // children: JSX.Element; // or this children should be a JSX element, specifically, note: your component.jsx should also be JSX element
    children: JSX.Element[]; // for multiple children should use an array
}

export default function Buttonchildren({children} : buttonProps){
    // here we get from the DOM elements passing inside of this components, and display it here. for example. in the App.tsx, we can passing <Buttonchildren>Hello!</Buttonchildren>
    // Hello! will be the children
    // or if you add another component inside this component, all of them are children.
    return <button>{children}</button>
}