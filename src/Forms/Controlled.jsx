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
// import { useState } from 'react'

// const Controlled = () => {
//   let [name,setName]=useState("")
//   let [email,setEmail]=useState("")
//   let [password,setPassword]=useState("")

//   let handleNameChange=(e)=>{
//     setName(e.target.value)
//   }
//   let handleEmailChange=(e)=>{
//     setEmail(e.target.value)
//   }
//   let handlePasswordChange=(e)=>{
//     setPassword(e.target.value)
//   }
//   let handleSubmit = (e)=>{
//      e.preventDefault()
//      let details={
//       name,email,password
//      }
//      console.log(details)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id='name' value={name} onChange={handleNameChange}/>
//       <br /><br />
//       <label htmlFor="email">Email:</label>
//       <input type="email" id='email' value={email} onChange={handleEmailChange}/>
//       <br /><br />
//       <label htmlFor="password">Password:</label>
//       <input type="password" id='password' value={password} onChange={handlePasswordChange}/>
//       <br /><br />
//       <button type='submit'>Register</button>
//     </form>
//   )
// }

// export default Controlled

//!Example 3
import React, { useState } from 'react'

const Controlled = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    gender: "",
    skills: [],
    country: "",
    feedback: "",
    photo: ""
  })
  let { name, email, password, phone, dob, gender, skills, country, feedback, photo } = formData
  let handleChange = (e) => {
    let { name, value, type, checked } = e.target
    if (type == "checkbox") {
      let copiedSkills = [...skills]
      if (checked) {
        copiedSkills.push(value)
      } else {
        copiedSkills = copiedSkills.filter(ele=> ele!==value)
      }
      setFormData({ ...formData, [name]: copiedSkills })
    } else if (type == "file") {
      setFormData({ ...formData, [name]: e.target.files[0].name })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return <>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Registration Form🔥</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange} />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={handleChange} />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={password} onChange={handleChange} />
        <br /><br />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" value={phone} onChange={handleChange} />
        <br /><br />
        <label htmlFor="dob">Dob:</label>
        <input type="datetime-local" name="dob" id="dob" value={dob} onChange={handleChange} />
        <br /><br />
        <label htmlFor="gender">Gender:</label>
        <input type="radio" name="gender" id="male" value="male" onChange={handleChange} />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" onChange={handleChange} />
        <label htmlFor="female">Female</label>
        <br /><br />
        <label htmlFor="skills">Skills:</label>
        <input type="checkbox" name="skills" id="html" value="Html" onChange={handleChange} />
        <label htmlFor="html">Html</label>
        <input type="checkbox" name="skills" id="css" value="Css " onChange={handleChange} />
        <label htmlFor="css">Css</label>
        <input type="checkbox" name="skills" id="js" value="Js" onChange={handleChange} />
        <label htmlFor="js">Js</label>
        <input type="checkbox" name="skills" id="react" value="React" onChange={handleChange} />
        <label htmlFor="react">React JS</label>
        <br /><br />
        <label htmlFor="country">Country:</label>
        <select name="country" id="country" value={country} onChange={handleChange}>
          <option disabled>--Select Country--</option>
          <option>India</option>
          <option>Australia</option>
          <option>Russia</option>
          <option>Thailand</option>
        </select>
        <br /><br />
        <label htmlFor="feedback">Feedback:</label>
        <textarea name="feedback" id="feedback" rows="10" cols="40" value={feedback} onChange={handleChange}></textarea>
        <br /><br />
        <label htmlFor="photo">Upload Id:</label>
        <input type="file" name="photo" id="photo" onChange={handleChange} />
        <br /><br />
        <button type="submit">Register</button>
        <button type="reset">Reset</button>
      </fieldset>
    </form>
  </>
}

export default Controlled