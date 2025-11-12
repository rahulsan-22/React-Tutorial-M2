import { useContext } from "react"
import { BiscuitContext, ChocolateContext, MixingContext, UserContext } from "./Instamart"

const Chaitanyapuri = () => {
  let data1 = useContext(ChocolateContext)
  let data2 = useContext(BiscuitContext)
  let data3 = useContext(MixingContext)
  let data4 = useContext(UserContext)
  let {name,age,place,isEmployee} = data4
  return (
    <div>
      <h1>Chaitanyapuri - {data1} - {data2} - {data3}</h1>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
      <h1>isEmployee : {isEmployee ? "True" :"False"}</h1>
      <h1>Place : {place}</h1>
    </div>
  )
}

export default Chaitanyapuri