import React from "react"
import { Routes } from "react-router-dom"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Contact from "./Route/Contact"
import Home from "./Route/Home"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* see navigate and exact path */}
      </div>
    </BrowserRouter>
  )
}

export default App
