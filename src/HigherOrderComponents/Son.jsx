import Hoc from "./Hoc"

const Son = ({breakfast,price}) => {
  return (
    <div>Son eat {breakfast} which costs around ₹{price}</div>
  )
}

export default Hoc(Son)