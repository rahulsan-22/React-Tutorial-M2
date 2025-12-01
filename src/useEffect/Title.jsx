import { useEffect } from "react"

const Title = () => {
  //!useEffect with cleanup function
  useEffect(()=>{
    return ()=>{
      console.log("useEffect Running like unmounting phase method....")
    }
  },[])
  return (
    <div>
      <h1>UseEffect Hook</h1>
    </div>
  )
}

export default Title