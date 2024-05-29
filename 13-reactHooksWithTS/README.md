# ReactHooks + TS
1. useState
note: using useState, we can depend on the implicit type infer if `the type is basic`, or using the explicitly description if `the type is custom`

```
  interface User {
  id: number,
  username: string
}

  const [count, setCount] = useState<number>(0)

  // if you define an array with default empty array
  const [users, setUsers] = useState<User[] | null>(null)

  // if you define a user with default value a empty object , please typecasting it as User
  const [user, setUser] = useState<User>({} as User)

```

2. useEffect: dealing with `sideEffect (when something changes, something else / sideeffects might happen)`, it doesn't return value
note: (run one time when DOM mounts. when using `strict mode` (applying in the dev mode), it `mounts and unmounts and remounts again`. in the unstrict mode: just mounts it. so in the strict mode, you can see the log twice). so you can set `return a cleanup function`. so in the strict mode, it will unmount once !!
```
   useEffect(() => {
    console.log(`haha`)

    return () => console.log('unmounting')
  }, [])

  // the result:
  haha
  unmounting
  haha

```


3. useCallback: memorimize and generate a function when and only when some condition achieves. we can define the parameters explicitly or implicitly!! (note: when you define an event , please explicitly define the event type with which element to trigger this event through `eventTYpe<elementTrigger>`). 
```
   const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

```

4. useMemo: memorize a calculated value from a function (only change the memory and recalcuate a function when the parameter change) !! we will use that for expensive calculation (like a recursive function). `useMemo will help you to just take an expensive calculation in the first time but after that it will take no time at all to get that result from the memory` (so it will save a lot of time and memory, every other time when components are re-rendered!!)

```
  // define a protetype of function type alias
  type fibFunc = (n: number) => number

  const fib: fibFunc = (n) => {
    if (n < 2) return n
    return fib(n-1) + fib(n-2)
  }

  const result = useMemo<number>(() => fib(myNum), [myNum])

```


6. useRef: define a ref variable which will not trigger a rerendering the page
```
  
  // notice here we specify that our ref would be a HTMLInputElement , but we could set the default to be a null. later we can have an <input ref={inputRef}> so inputRef.current should be this <input> element. and the inputRef.current.value should be the text content received from the input element
  
  const inputRef = useRef<HTMLInputElement>(null)

  // this is the value check the first method
  if (!inputRef.current) console.log("sorry, no refer right now")

  console.log(inputRef?.current) // null pointer. but when re-rendered the page, it possibly get an input element 

  
  console.log(inputRef?.current?.value) // undefined // it possibly get a text input value from the input element when re-render the page

```