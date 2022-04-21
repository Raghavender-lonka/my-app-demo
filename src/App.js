import React, { PureComponent } from "react"
import HighOrder from "./components/HigherOrder/HigherOrder"
import PureClass from "./components/PureComponent/PureComponentClass"
import RegularComp from "./components/PureComponent/Regular"

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      message: "hi",
    }
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ message: "hi" })
  //   }, 1000)
  // }

  render() {
    // console.log("App")
    return (
      <div>
        <PureClass msg={this.state.message} />
        <RegularComp msg={this.state.message} />
      </div>
    )
  }
}

export default App
