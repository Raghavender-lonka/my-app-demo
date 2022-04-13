import React from "react"
import { Routes } from "react-router-dom"
import { BrowserRouter, Route, NavLink } from "react-router-dom"
import Contact from "./Route/Contact"
import Home from "./Route/Home"

function App() {
  function navStyle({ isActive }) {
    return getStyles(isActive)
  }

  const getStyles = (isActive) => {
    if (isActive) {
      return { backgroundColor: "red" }
    } else {
      return {}
    }
  }

  return (
    <BrowserRouter>
      <div>
        <NavLink to="/home" style={navStyle}>
          Home
        </NavLink>
        <br />
        <NavLink to="/contact" style={navStyle}>
          Contact
        </NavLink>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/contact/:name" element={<Contact />} />
        </Routes>
        {/* see navigate and exact path */}
      </div>
    </BrowserRouter>
  )
}

export default App
