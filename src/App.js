import React, { useState } from "react";
import Events from "./components/events/Events";

// const myList = [
//   {
//     label: "Apple",
//     price: 20,
//     id: 20,
//   },
//   {
//     label: "Banana",
//     price: 10,
//     id: 10,
//   },
//   {
//     label: "Custurd",
//     price: 5,
//     id: 5,
//   },
// ];

function App() {
  return (
    <h1 className="App">
      <Events />
    </h1>
  );
}

export default App;
