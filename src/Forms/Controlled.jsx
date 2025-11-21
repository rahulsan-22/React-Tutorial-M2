//!Example 1
// import { useState } from "react"
// const Controlled = () => {
//   let [name,setName]=useState("")
//   let handleNameChange=(e)=>{
//     setName(e.target.value)
//   }
//   return (
//     <div>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" value={name} onChange={handleNameChange}/>
//       <p>My name is:{name}</p>
//     </div>
//   )
// }
// export default Controlled

//!Example 2
import { useState } from 'react'

const Controlled = () => {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  
  let handleNameChange=(e)=>{
    setName(e.target.value)
  }
  let handleEmailChange=(e)=>{
    setEmail(e.target.value)
  }
  let handlePasswordChange=(e)=>{
    setPassword(e.target.value)
  }
  let handleSubmit = (e)=>{
     e.preventDefault()
     let details={
      name,email,password
     }
     console.log(details)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id='name' value={name} onChange={handleNameChange}/>
      <br /><br />
      <label htmlFor="email">Email:</label>
      <input type="email" id='email' value={email} onChange={handleEmailChange}/>
      <br /><br />
      <label htmlFor="password">Password:</label>
      <input type="password" id='password' value={password} onChange={handlePasswordChange}/>
      <br /><br />
      <button type='submit'>Register</button>
    </form>
  )
}

export default Controlled