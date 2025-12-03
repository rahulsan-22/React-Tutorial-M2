import { PureComponent } from 'react'

class Pure extends PureComponent {
  constructor(){
    super()
    this.state={
      hero:"Monty"
    }
  }
  render() {
    console.log("Pure Component Rendering....")
    return (
      <div>
        <h1>Pure Component</h1>
        <h1>{this.state.hero}</h1>
        <button onClick={()=>this.setState({hero:"Pavan"})}>Change Hero</button>
      </div>
    )
  }
}

export default Pure