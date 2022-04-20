import React from "react"
import Child3 from "./Child3"
import Child4 from "./Child4"

function Child2({ name }) {
  return (
    <div>
      <Child3 name={name} />
      <Child4 />
    </div>
  )
}

export default Child2
