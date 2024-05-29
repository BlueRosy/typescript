// typing state in TypeScript
import React from 'react'

type buttonProps = {
    setUserInput: React.Dispatch<React.SetStateAction<string>>,
}

function ButtonState({setUserInput}: buttonProps) {

    // setUserInput("Rose");
    return (
        <button>hi</button>
    )
}

export default ButtonState