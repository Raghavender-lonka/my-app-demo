import React, { Component } from "react"

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }
  componentDidMount() {
    console.log("Mounted")
    this.timerId = setInterval(() => {
      console.log("Interval")
    }, 1000)
  }

  componentDidUpdate() {
    console.log("Updating")
  }

  componentWillUnmount() {
    console.log("Unmounting")
    clearInterval(this.timerId)
  }
  handlerIncrement = () => {
    const updateCounter = this.state.counter + 1
    this.setState({
      counter: updateCounter,
    })
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handlerIncrement}>Click</button>
      </div>
    )
  }
}
export default ClassComponent
