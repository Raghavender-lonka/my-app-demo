import React from "react"
import { useParams } from "react-router-dom"

const Contact = () => {
  const params = useParams()
  const { name } = params

  const userData = (name) => {
    switch (name) {
      case "raghu":
        return {
          name,
          contact: 999999999,
        }
      case "rohit":
        return {
          name,
          contact: 88888888888,
        }
      default:
        return {
          name: "john",
          contact: 777777777,
        }
    }
  }

  const getData = userData(name)
  return (
    <div>
      <>
        <h1>Name: {getData.name}</h1>
        <h1>Contact: {getData.contact}</h1>
      </>
    </div>
  )
}

export default Contact
