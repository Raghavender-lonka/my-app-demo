import React from "react"

class RegularComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "hiiii",
    }
  }
  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({ message: "hiiii" })
  //       console.log("Regular")
  //     }, 1000)
  //   }
  render() {
    /* console.log("Regular") */
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    )
  }
}

export default RegularComp
