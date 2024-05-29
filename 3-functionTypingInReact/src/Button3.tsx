import React from "react"
// just use React.CSSProperties. it will automatically loaded css property and their correct naming standard to help me check typeerror

type buttonProps = {
    style: React.CSSProperties; // helps us to automatically check if our passed params are css styling keywords

};

function Button3({style}: buttonProps) {
    return <button style={style}>WoW!!</button>
}

export default Button3