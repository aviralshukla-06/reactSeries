import { useRef, useState, useEffect } from 'react'


function App() {
  const [timer, setTimer] = useState(0);
  const value = useRef;

  function startClock() {
    let currCount = setInterval(function () {
      setTimer(c => c + 1)
    }, 1000)
    value.current = currCount;
  }


  function stopClock() {
    clearInterval(value.current);
  }


  return (
    <>
      {timer}
      <br />

      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>

    </>
  )
}

export default App
