import React, { memo } from "react"

function MemoReact({ counter, handleChange }) {
  console.log("Memo")
  return (
    <div>
      <h1>counterMemo: {counter}</h1>
      <button onClick={handleChange}>Click</button>
    </div>
  )
}

export default memo(MemoReact)
