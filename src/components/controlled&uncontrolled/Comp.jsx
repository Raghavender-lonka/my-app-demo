import React, { useState } from "react"

const Comp = () => {
  const [controll, setControll] = useState("")
  //   const name1 = useRef(null)
  const handleChange = (e) => {
    setControll(e.target.value)
    console.log(e.target.value)
  }

  //   const handleChange1 = (e) => {
  //     name1.current = e.target.value
  //     console.log(name1.current)
  //   }

  return (
    <div>
      <label htmlFor="name">Controlled</label>
      <br />
      <input id="name" type="text" value={controll} onChange={handleChange} />
      <br />
      <br />
      <br />
      <label htmlFor="name2">UnControlled</label>
      <br />

      <input
        id="name2"
        type="text"
        // ref={name1}
        // value={name1.current}
        // onChange={handleChange1}
      />
      <br />
    </div>
  )
}

export default Comp
