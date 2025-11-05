const User = ({trainerName,age,isMarried,hasExGirlfriends,hasKids,skills,address:{place,pincode},fun}) => {
  return (
    <div>
      <p>My Name is {trainerName}</p>
      <p>I am {age} years old</p>
      <p>{isMarried ? "Yes, I'm Married" : "No, I'm not married"}</p>
      <p>{hasExGirlfriends == undefined ? "Yes I had Ex Girlfriends" : "No I dint had Ex Girlfriends"}</p>
      <p>{hasKids == null ? "No I dont have kids" : "Yes Im having kids"}</p>
      <p>I am good at {skills}</p>
      <p>I am from {place} and the pincode is {pincode}</p>
      <button onClick={fun}>Click</button>
    </div>
  )
}

export default User