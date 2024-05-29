import React, { useState } from 'react'
import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

function App() {
  //define count state variable
  const [count, setCount] = useState<number>(0)


  // children is what inside a JSX Element. eg.inside <section>this is the children part</section>
  return (
    <>
      <Heading title={"Hello. How are you ?"} />
      <Section >This is my Section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["bread", "cossine", "cake", "milk", "soymilk"]} render={(item: string) => <span>{item}</span>}></List>
    </>
    
  )
}

export default App