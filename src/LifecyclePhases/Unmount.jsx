import { Component } from 'react'

class Unmount extends Component {
  componentWillUnmount(){
    console.log("ComponentWillUnmount Method invoked")
  }
  render() {
    return (
      <div>Unmount</div>
    )
  }
}
export default Unmount
