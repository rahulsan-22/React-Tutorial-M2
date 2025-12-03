import { Component } from 'react'

class Normal extends Component {
  constructor(){
    super()
    this.state = {
      hero:"Monty"
    }
  }
  render() {
    console.log("Normal Component Rendering....")
    return (
      <div>
        <h1>Normal Component</h1>
        <h1>{this.state.hero}</h1>
        <button onClick={()=>this.setState({hero:"Pavan"})}>Change Hero</button>
      </div>
    )
  }
}
export default Normal