import React, { Component } from "react"
import { HamburgerCollapseReverse } from "react-animated-burgers"
import SideMenu from "./SideMenu"

class App extends Component {
  state = {
    isActive: false,
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    return (
      <>
      <div style={{ position: "fixed", right: 5, top: 5, zIndex: 100}}>
        <HamburgerCollapseReverse
          isActive={this.state.isActive}
          toggleButton={this.toggleButton}
          buttonColor="rgb(180, 85, 180)"
          barColor="white"
        />
      </div>
      {
        this.state.isActive ?  <SideMenu /> : null
      }
      </>
    )
  }
}

export default App
