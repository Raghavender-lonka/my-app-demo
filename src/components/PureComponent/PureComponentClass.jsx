import React, { PureComponent } from "react"

class PureClass extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({ message: "hi" })
  //       console.log("Pure")
  //     }, 1000)
  //   }
  render() {
    // console.log("Pure")

    return (
      <div>
        <h1>Hi {this.props.message}</h1>
      </div>
    )
  }
}

export default PureClass
