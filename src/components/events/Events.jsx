import React, { useState } from "react";

const Events = () => {
  const [myValue, setValue] = useState("");

  const handleChange = (e) => {
    let password = e.target.value.trim();
    console.log(password.length);
    setValue(password);
  };
  const handleSubmit = () => {
    setValue("");
  };

  return (
    <div>
      {/* onChange */}
      <h1>Form</h1>
      {myValue.trim().length <= 8 ? (
        <p>Password should be greater than 8</p>
      ) : myValue.trim().length <= 10 ? (
        <p>Password Length should be greater than 10</p>
      ) : (
        <p>Password is strong</p>
      )}
      <input type="text" onChange={handleChange} value={myValue} />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Events;
