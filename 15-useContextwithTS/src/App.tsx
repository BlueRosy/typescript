import Counter from './components/Counter'
import { CounterContextProvider } from './context/CounterContext'


const App = () => {

  // because the children prop has been defined as a function, so we need to parse a {function} to children content
  return (
    <>
      <CounterContextProvider>
          <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterContextProvider>
      
    </>
  )
}

export default App