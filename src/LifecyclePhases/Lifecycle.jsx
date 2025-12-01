import { Component } from "react";
import Unmount from "./Unmount";

class Lifecycle extends Component {
  constructor() {
    super()
    console.log("Constructor Method invoked")
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log("ComponentDidMount Medthod invoked")
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate Method invoked")
  }
  render() {
    console.log("Render Method invoked")
    return <>
      <h1>Lifecycle Phases</h1>
      <h1>Count - {this.state.count}</h1>
      <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      {this.state.count<5 && <Unmount/>}
    </>
  }
}
export default Lifecycle