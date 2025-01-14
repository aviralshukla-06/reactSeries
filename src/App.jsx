import { createContext, useState, useContext, Children } from 'react'

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{
    count: count,
    setCount: setCount
  }}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  )
}

function Increase() {
  const { count, setCount } = useContext(CountContext);

  return <button onClick={() => setCount(count => count + 1)}>Increase</button>
}

function Decrease() {
  const { count, setCount } = useContext(CountContext);

  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>
}
function Value() {
  const { count } = useContext(CountContext);

  return <div>
    Count : {count}
  </div>
}

function App() {
  return <div>
    <Parent />
  </div>

}

export default App
