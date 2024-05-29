import React, {ReactNode} from 'react'


// have a generic interface meaning any type. when quote a generic, please quote with ListProps<T>

// to render a items list, how you can define an inteface to do that
interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode,
}


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

export default List