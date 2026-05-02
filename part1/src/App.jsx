import { useState } from "react";

const App = () =>{
  const [counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter+1),
    1000
  )
  const handleClick=()=>{
    console.log('clicked')
  }

  return (
    <div>
      <button onClick={()=> setCounter(counter+1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
}

export default App