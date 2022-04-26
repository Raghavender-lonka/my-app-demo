import React, { useState } from "react"
import axios from "axios"

export default function AxiosComp() {
  const [myData, setMyData] = useState([])

  // with fetch
  //   const handleClick = async () => {
  //     try {
  //       const respone = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos"
  //         // {
  //         //   method: "GET",
  //         //   headers: {
  //         //     "Content-Type": "application/json",
  //         //   },
  //         // }
  //       )
  //       const jsonResponse = await respone.json()
  //       // console.log(jsonResponse)
  //       setMyData(jsonResponse)
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }

  // with axios
  const handleClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      )
      //   const jsonResponse = await respone.json()
      // console.log(jsonResponse)
      setMyData(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch</button>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Title</th>
            <th>Id</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((data) => {
            const { userId, id, completed, title } = data
            return (
              <tr>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{completed}</td>
                <td>{title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
