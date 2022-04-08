import React from "react";
import "./propFunc.css";

const PropsFunc = (props) => {
  const { label, counter, handleIncrement, handleDecrement, index, id } = props;

  const incrementHandler = () => {
    handleIncrement(index);
  };
  const decrementHandler = () => {
    handleDecrement(index);
  };
  return (
    <div>
      <h4>
        {label}: {counter}
      </h4>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};

export default PropsFunc;
