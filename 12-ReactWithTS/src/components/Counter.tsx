import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'

// how you can define a setCount function as a specific type
type counterProps = {
    children: ReactNode,
    setCount: React.Dispatch<React.SetStateAction<number>>,
}

const Counter = ({children, setCount}:counterProps) => {

    // how to define a state value with TS. but it can be implicitly inferred
    // const [count, setCount] = useState<number>(0)

    // another way is to define those state variables inside the parent component and passsing the props in the children component

    return (
        <>
            <h1>{children}</h1>
            <div>
                <button onClick={() => setCount(c => c + 1)}>+</button>
                <button onClick={() => setCount(0)}>reset</button>
                <button onClick={() => setCount(c => c - 1)}>-</button>
            </div>
        </>
    )
}

export default Counter