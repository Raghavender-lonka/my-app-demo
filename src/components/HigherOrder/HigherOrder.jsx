import React from "react"
import IncrementCounterHoc from "./IncrementCounterHoc"

const HigherOrder = (props) => {
  const { counter, handleChange } = props
  // const [counter, setCounter] = useState(0)
  return (
    <div>
      <p> Counter:{counter}</p>
      <button onClick={handleChange}>Click</button>
    </div>
  )
}

export default IncrementCounterHoc(HigherOrder)
