import React, { useState } from "react";
import PropFunc from "./components/props/propFunc";

const myList = [
  {
    label: "Apple",
    price: 20,
    id: 20,
  },
  {
    label: "Banana",
    price: 10,
    id: 10,
  },
  {
    label: "Custurd",
    price: 5,
    id: 5,
  },
];

function App() {
  const [counterArr, setCounterArr] = useState(myList);

  const handleIncrement = (index) => {
    // const copyCountArr = cloneDeep(counterArr);
    const copyCountArr = [...counterArr];
    copyCountArr[index].price =
      copyCountArr[index].price + counterArr[index].id;
    setCounterArr(copyCountArr);
  };

  const handleDecrement = (index) => {
    const copyCountArr = [...counterArr];
    copyCountArr[index].price =
      copyCountArr[index].price - counterArr[index].id;
    setCounterArr(copyCountArr);
  };

  return (
    <h1 className="App">
      {counterArr.map((obj, i) => {
        const { label, price, id } = obj;
        return (
          <PropFunc
            label={label}
            counter={price}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            index={i}
            key={id}
          />
        );
      })}
    </h1>
  );
}

export default App;
