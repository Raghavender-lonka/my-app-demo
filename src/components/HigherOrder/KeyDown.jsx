import React from "react"
import IncrementCounterHoc from "./IncrementCounterHoc"

const KeyDown = (props) => {
  const { counter, handleChange } = props
  //   const [counter, setCounter] = useState(0)
  return (
    <div>
      <p> Hover {counter}</p>
      <button onMouseOver={handleChange}>Hover</button>
    </div>
  )
}

export default IncrementCounterHoc(KeyDown)
