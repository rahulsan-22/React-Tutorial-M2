const Hoc = (Comp) => {
  console.log(Comp)
  return ()=>{
    return <Comp breakfast="Masala Dosa" price={35} properties={["Car","Land","Gold","House"]}/> 
    //<Son breakfast="Masala Dosa" price={35} properties={["Car","Land","Gold","House"]}/> 
    //<Father breakfast="Masala Dosa" price={35} properties={["Car","Land","Gold","House"]}/> 
  }
}

export default Hoc