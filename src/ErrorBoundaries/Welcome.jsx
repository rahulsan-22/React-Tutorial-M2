const Welcome = ({hero}) => {
  if(hero=="Monty"){
    throw new Error("Monty is not hero but he is model")
  }
  return (
    <h1>Welcome - {hero}</h1>
  )
}

export default Welcome