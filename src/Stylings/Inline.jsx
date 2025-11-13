const Inline = () => {
  let stylesForPara = {
    color:"yellow",
    backgroundColor:"green",
    padding:"20px"
  }
  return (
    <div>
      <h1 style={{
        color: "white",
        backgroundColor: "red",
        textAlign: "center"
      }}>Heading</h1>
      <p style={stylesForPara}>Lorem ipsum, dolor sit</p>
      <button style={
        {
          width:"100%",
          border:"none",
          backgroundColor:"royalblue",
          color:"white"
        }
        }>Click</button>
    </div>
  )
}

export default Inline