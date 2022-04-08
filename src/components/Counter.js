import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [Mcount, setMCount] = useState(0);
  const [Lcount, setLCount] = useState(0);
  const [Tcount, setTCount] = useState(0);
  const [Icount, setICount] = useState(0);

  // function incrementHandler() {
  //   setCount(count + 1);
  // }
  // function decrementHandler() {
  //   setCount(count - 1);
  // }
  // // function zeroHandler() {
  // //   setCount(0);
  // // }

  function UniHandler(item, operation) {
    if (item === "moblie") {
      if (operation === "+") {
        setMCount(Mcount + 1);
      } else {
        setMCount(Mcount - 1);
      }
    }
    if (item === "laptop") {
      if (operation === "+") {
        setLCount(Lcount + 1);
      } else {
        setLCount(Lcount - 1);
      }
    }
    if (item === "tab") {
      if (operation === "+") {
        setTCount(Tcount + 1);
      } else {
        setTCount(Tcount - 1);
      }
    }
    if (item === "ipad") {
      if (operation === "+") {
        setICount(Icount + 1);
      } else {
        setICount(Icount - 1);
      }
    }
  }

  return (
    <div>
      <div className="btns">
        <button
          onClick={() => UniHandler("moblie", "-")}
          disabled={Mcount <= 0}
        >
          --
        </button>
        <span>mobile: {Mcount}</span>
        {/* <button onClick={zeroHandler}>Set to Zero</button> */}
        <button
          onClick={() => UniHandler("moblie", "+")}
          disabled={Mcount >= 5}
        >
          ++
        </button>
      </div>
      <div className="btns">
        <button
          onClick={() => UniHandler("laptop", "-")}
          disabled={Lcount <= 0}
        >
          --
        </button>
        <span>Laptop: {Lcount}</span>
        {/* <button onClick={zeroHandler}>Set to Zero</button> */}
        <button
          onClick={() => UniHandler("laptop", "+")}
          disabled={Lcount >= 5}
        >
          ++
        </button>
      </div>
      <div className="btns">
        <button onClick={() => UniHandler("tab", "-")} disabled={Tcount <= 0}>
          --
        </button>
        <span>Tab: {Tcount}</span>
        {/* <button onClick={zeroHandler}>Set to Zero</button> */}
        <button onClick={() => UniHandler("tab", "+")} disabled={Tcount >= 5}>
          ++
        </button>
      </div>
      <div className="btns">
        <button onClick={() => UniHandler("ipad", "-")} disabled={Icount <= 0}>
          --
        </button>
        <span>Ipad: {Icount}</span>
        {/* <button onClick={zeroHandler}>Set to Zero</button> */}
        <button onClick={() => UniHandler("ipad", "+")} disabled={Icount >= 5}>
          ++
        </button>
      </div>
    </div>
  );
}

export default Counter;
