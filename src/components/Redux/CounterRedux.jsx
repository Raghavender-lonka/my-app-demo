import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  decrement,
  increment,
  incrementByValue,
  selectCounter,
} from "../Redux/reducers"

const CounterReducer = () => {
  const countValue = useSelector(selectCounter)
  const dispatch = useDispatch()

  const handleIncrement = () => dispatch(increment())

  const handleDecrement = () => dispatch(decrement())

  const handleIncrementByValue = () =>
    dispatch(incrementByValue(Math.round(Math.random() * 10)))

  return (
    <div>
      <h1>Current Counter Value: {countValue} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementByValue}>Random Increment</button>
    </div>
  )
}

export default CounterReducer
