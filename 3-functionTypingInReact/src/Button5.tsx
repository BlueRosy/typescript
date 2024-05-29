// do some actions, and passing some functions when clicking on button. this can be also passing into properties for usage
type buttonProps = {
    // to define a function type. 1. if no parameter inputed and no return value;
    onClick: () => void;
    // 2. if we have parameters, we need to declare its type, and name and return type
    // onClick: (times: number) => string;
    
}

function Button5({onClick} : buttonProps){

    return <button className="bg-pink-300 text-white rounded-xl p-5 cursor-pointer" onClick={onClick}>Click Me</button>
}

export default Button5