import React, { useEffect, useState } from "react"

function UseEffectHook() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  //   useEffect(() => {
  //     console.log("here1")
  //   })
  useEffect(() => {
    // console.log("here2")
  }, [counter])
  //   useEffect(() => {
  //     console.log("here3")
  //   }, [counter2])

  // const incrementHandler = () => {
  //   return setCounter(counter + 1)
  // }

  return (
    <div>
      <h1>Counter : {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>++</button>
      <h1>Counter : {counter2}</h1>

      <button onClick={() => setCounter2(counter2 - 1)}>--</button>
    </div>
  )
}

export default UseEffectHook
