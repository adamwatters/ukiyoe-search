import React, { Component } from "react"
import Layout from "../components/layout"
import "../styles/about.css"

class App extends Component {
  render() {
    return (
      <Layout path={this.props.location.pathname}>
        <div className="about">This is where I explain what this site is</div>
      </Layout>
    )
  }
}

export default App
