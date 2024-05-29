import { createContext, useReducer, ChangeEvent, ReactElement, useCallback, useContext } from "react";

// define the StateType, which state vars will be inside the state
type StateType = {
    count: number,
    text: string,
}

// define the init state
export const initState: StateType = { count: 0, text: '' }

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


// define reducer functions: which will take both state and action => select the action.type name , and write the function logics here
const reducer = (state: StateType, action: ReducerAction): StateType => {
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

// define useReducer(state, dispatch), in which dispatch({parameters in action})
const useCounterContext = (initState:StateType) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const decrease = useCallback(() => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT}), [])

    const increase = useCallback(() => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT}), [])

    const reset = useCallback(() => dispatch({type: REDUCER_ACTION_TYPE.RESET}), [])
    const handleTextInput = useCallback((e:ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: REDUCER_ACTION_TYPE.NEW_INPUT, 
        payload: e.target.value
      })
    }, [])

    return {state, increase, decrease, reset, handleTextInput}
    
}

// return context type
type UseCounterContextType = ReturnType<typeof useCounterContext>

// initialzed value but not type !!
const initContextState: UseCounterContextType = {
    state: initState,
    increase: () => {},
    decrease: () => {},
    reset: () => {},
    handleTextInput: (e:ChangeEvent<HTMLInputElement>) => {},
    
}

// the first export: export the context
export const CounterContext = createContext<UseCounterContextType>(initContextState)

// define the elements type inside the provider
type ChildrenType = {
    children?: ReactElement | null
}

// the second export: export contextprovider
export const CounterContextProvider = ({children}: ChildrenType):ReactElement => {
    return (
    <CounterContext.Provider value={useCounterContext(initState)}>
        {children}
    </CounterContext.Provider>
    )
}

// define useCounter return type (different parts)
type UseCounterHookType = {
    count: number,
    increase: () => void,
    decrease: () => void,
    reset: () => void,
    
}


// the third export: export the useCounter we defined
export const useCounter = (): UseCounterHookType => {
  const {state: {count}, 
        increase, 
        decrease, 
        reset} = useContext(CounterContext)
  
  return {count, increase, decrease, reset}

}

type useCounterTextType = {
  text: string,
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useCounterText = ():useCounterTextType => {
  const {state: {text},
        handleTextInput} = useContext(CounterContext)

  return {text, handleTextInput}
}

