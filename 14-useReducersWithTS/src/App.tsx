import React from 'react'
import Counter from './components/Counter'

const App = () => {

  // because the children prop has been defined as a function, so we need to parse a {function} to children content
  return (
    <>
    <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  )
}

export default App