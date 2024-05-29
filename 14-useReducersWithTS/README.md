# 14. useReducer hook

An alternative to useState.

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

so to summarize: useReducer always used when many / multiple states should be managed and updated , so 

1. we could set `initState to be an object {x: , y: , z:}` which will include multiple state varaibles. 
```
  const initState = { count: 0 }
```

2. then establish reducer function to switch different update state function and write logic in the same place!. 

```
  const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  RESET,
  }

  type ReducerAction = {
    type: REDUCER_ACTION_TYPE
  }

  const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
      case REDUCER_ACTION_TYPE.INCREMENT:
        return {...state, count: state.count + 1 }
      case REDUCER_ACTION_TYPE.DECREMENT:
        return {...state, count: state.count - 1 }
      case REDUCER_ACTION_TYPE.RESET:
        return {...state, count: 0}
      default:
        throw new Error()
    }
  }


```

3. finally, utilize the state object and update functions in the different place


``` 
  const [state, dispatch] = useReducer(reducer, initState)

    const decrease = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
    const increase = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
    const reset = () => dispatch({type: REDUCER_ACTION_TYPE.RESET})
    
```

4. note that inside the `ReducerAction` type alias or interface , when can setup other parameters (for using when some functions need to use.) these could be optional using ? , However, we have to handle the null issue when writing reducer function logic , otherwise, TS will trigger an error!!