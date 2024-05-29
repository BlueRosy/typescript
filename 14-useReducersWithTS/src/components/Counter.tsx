import React, {ReactNode, useState, useReducer, ChangeEvent} from 'react'

const initState = { count: 0, text: '' }

// define update function. one of them
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  RESET,
  NEW_INPUT,
}

// define ReducerAction parameter. type is the function type (name). others are parameters used inside the function. some parameters are optional and only for one function. use ? here and handle the null issue downside when writing reducer logic
type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?: string, // must optional , otherwise, INCREMENT and DECREMENT will have sth wrong !! because they don't require payload
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return {...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return {...state, count: state.count - 1 }
    case REDUCER_ACTION_TYPE.RESET:
      return {...state, count: 0 }
    //  Nullish coalescing operator is a new feature introduced in this ECMA proposal and is denoted by the double question marks (??). Javascript double question mark is a logical operator that takes two values and returns the right-hand value if the left-hand value is undefined or null, Else returns the left-hand operand
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return {...state, text: action.payload ?? ""}
    default:
      throw new Error()
  }
}



type ChildrenType = {
  children: (num: number) => ReactNode
}


const Counter = ({children}: ChildrenType) => {

    // const [count, setCount] = useState<number>(0)

    // reducer declare how to update the initState, whereas initState describe the initital state
    const [state, dispatch] = useReducer(reducer, initState)

    const decrease = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
    const increase = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
    const reset = () => dispatch({type: REDUCER_ACTION_TYPE.RESET})
    const handleTextInput = (e:ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: REDUCER_ACTION_TYPE.NEW_INPUT, 
        payload: e.target.value
      })
    }
    
    // const decrease = ():void => setCount(prev => prev - 1)
    // const reset = ():void => setCount(0)
    // const increase = (): void => setCount(prev => prev + 1)
    

  return (
    <>
        <h2>{children(state.count)}</h2>
        <div>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={increase}>+</button>
        </div>
        <input type="text" onChange={handleTextInput}/>
        <h2>{state.text}</h2>
    </>
  )
}

export default Counter