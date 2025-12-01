import { Component } from 'react'

class FallbackUI extends Component {
  constructor(){
    super()
    this.state={
      hasError:false
    }
  }
  static getDerivedStateFromError(){
    return {
     hasError:true
    }
  }
  componentDidCatch(error,info){
     console.log(error)
     console.log(info)
  }
  render() {
     if(this.state.hasError){
      return <h1>Something Went Wrong</h1>
     }else{
      return this.props.children
     }
  }
}
export default FallbackUI