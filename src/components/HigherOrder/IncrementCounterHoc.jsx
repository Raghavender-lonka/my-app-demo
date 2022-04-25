import React, { useState } from "react"

const IncrementCounterHoc = (Comp) => {
  const AddedComp = () => {
    const [counter, setCounter] = useState(0)

    return (
      <Comp counter={counter} handleChange={() => setCounter(counter + 1)} />
    )
  }

  return AddedComp
}

export default IncrementCounterHoc
