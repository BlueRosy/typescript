import React, {ReactNode} from 'react'
import { useCounter, useCounterText} from '../context/CounterContext'

type ChildrenType = {
  children: (num: number) => ReactNode
}


const Counter = ({children}: ChildrenType) => {

  const {count, increase, decrease, reset} = useCounter()

  const {text, handleTextInput} = useCounterText()


  return (
    <>
        <h2>{children(count)}</h2>
        <div>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={increase}>+</button>
        </div>
        <input type="text" onChange={handleTextInput}/>
        <h2>{text}</h2>
    </>
  )
}

export default Counter