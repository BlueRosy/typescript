# Lesson 12: React + TS
1. define `type alias Props in the beginning of a function component` and use object destructuring in the function components so that those useful propname can be directly used in the component and required in the parent component.
note: react component by default return JSXElement or ReactELement which will be a html tag

2. some old way to use TS in react
`don't use React.FC now!!!`
 
```
  export const Section: React.FC<{title: string}> = ({children, title}) => {

    return 
        <>
          <h1>{title}</h1>
          <p>{children}</p>
        </>
  }
```
3. in older way, define the compoent.defaultProps = {} down below and outside the react component
```

  function component() {}

  component.defaultProps = {}

```
However, this way is now deprecated. the modern way
```
  type componentProps = {
    a?: string,
    b?: string,
  }

  function component({a = "default a", b = "default b"}: componentProps) {}

```

4. note: inside the props, if you are defining propname as children: ReactNode, then children will be all the stuff inside the `<component>children</component> `parent will pass inside the component 


5. to define a state variable in react with TS, using ` <datatype>  `
```
  // how to define a state value with TS
    const [count, setCount] = useState<number>(0)
```

and to pass a setState function down to children component. using `React.Dispatch and React.SetStateAction<datatype>`

```
  // how you can define a setCount function as a specific type
type counterProps = {
    children: ReactNode,
    setCount: React.Dispatch<React.SetStateAction<number>>,
}
```

6. using generic props `<T>`
create a generic syntax:
```
  interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode,
}
```

usage syntax: 
```
  // React hard to recognize the generic !!! to solve. the solution 1: is to extend the generic T `T extends {}` , this can help react to realize this is a generic and Solution 2: <T,>
  const List = <T,>({items, render}: ListProps<T>) => {
  return (
    <ul>
        {items.map((item, index) => (
        <li key={index}>
            {render(item)}
        </li>))}
    </ul>
  )
}
```
React `doesn't recognize` the generic !!! to solve. the solution 1: is to extend the generic T `T extends {}` , this can help react to realize this is a generic and `Solution 2: <T,>`

note: the third question is to how to pass the parameters inside the generic function (define function render: `(item: T) => ReactNode)`
```
   <List items={["bread", "cossine", "cake", "milk", "soymilk"]} render={(item: string) => <span>{item}</span>}></List>
```