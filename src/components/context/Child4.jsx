import React, { useContext } from "react"
import { Info } from "../../App"

function Child4() {
  const name = useContext(Info)
  return (
    <div>
      <h1>With useContext: {name}</h1>
    </div>
  )
}

export default Child4
