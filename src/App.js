import React, { createContext } from "react"
import Child1 from "./components/context/Child1"

export const Info = createContext()

function App() {
  return (
    <div>
      <Info.Provider value={"Library"}>
        <Child1 name={"React"} />
      </Info.Provider>
    </div>
  )
}

export default App
