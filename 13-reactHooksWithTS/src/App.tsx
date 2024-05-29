import React, {useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent
} from 'react'
interface User {
  id: number,
  username: string
}

// define a protetype of function type alias
type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n-1) + fib(n-2)
}

const myNum: number = 5

// useState can parse any datatype or custom interface / type , for example, <User[] | null> , in which User is a custom interface!!
const App = () => {

  const [count, setCount] = useState<number>(0)
  // if you define an array with default empty array
  const [users, setUsers] = useState<User[] | null>(null)
  // if you define a user with default value a empty object , please typecasting it as User
  const [user, setUser] = useState<User>({} as User)


  // 6. useRef : changing the component ref cannot render or update the rendered component
  const inputRef = useRef<HTMLInputElement>(null)

  // this is the value check the first method
  if (!inputRef.current) console.log("sorry, no refer right now")

  console.log(inputRef?.current) // null pointer. but when re-rendered the page, it possibly get an input element 
  console.log(inputRef?.current?.value) // undefined // it possibly get a text input value from the input element when re-render the page


  // run one time when DOM mount. when using strict mode (applying in the dev mode), it mounts and unmounts and remounts again. in the unstrict mode: just mounts it. so in the strict mode, you can see the log twice. and because it will unmount once, so you can see that console.log "unmounting" once in the strict mode
  useEffect(() => {
    console.log(`mounting`)
    console.log(`Users: `, users)

    return () => console.log('unmounting')
  }, [users])

  // when you set onClick = function, you can directly define a function inside but it will be created every time . what we could do is to define this function and useCallback when it needs
  
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])


  // 4. useMemo : memorize the calculated var when parameters list unchanges, but any of them changes, this calculation will be run again !
  const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h1>Result of Fib: {result}</h1>
      <input type="text" ref={inputRef}  />
    </div>
  )
}

export default App