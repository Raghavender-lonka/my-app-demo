import { dividerClasses } from "@mui/material"
import React, { useState } from "react"
import ClassComponent from "./components/ClassComponent/ClassComponent"
// import Events from "./components/events/Events"

function App() {
  const [showCounter, setShowCounter] = useState(true)

  setTimeout(() => {
    setShowCounter(false)
  }, 5000)
  return <div>{showCounter ? <ClassComponent /> : <h1>Bye</h1>}</div>
}

export default App
