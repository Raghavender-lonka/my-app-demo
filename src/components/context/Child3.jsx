import React from "react"
import { Info } from "../../App"

function Child3({ name }) {
  return (
    <Info.Consumer>
      {(library) => {
        return (
          <h1>
            {name}-{library}
          </h1>
        )
      }}
    </Info.Consumer>
  )
}

export default Child3
