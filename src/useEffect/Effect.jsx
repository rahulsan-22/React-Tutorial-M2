import { useEffect, useState } from "react"
import Title from "./Title"

const Effect = () => {
  let [age, setAge] = useState(25)
  let [salary, setSalary] = useState(10000)

  //!useEffect with empty dependency list
  useEffect(()=>{
    console.log("useEffect Running like Mounting phase methods....")
  },[])

  //!useEffect with no dependency list
  useEffect(()=>{
    console.log("useEffect running like updating phase methods.....")
  })
  
  //!useEffect with dependency
  useEffect(() => {
    console.log("useEffect Runs only when one of its dependencies change...")
  }, [salary])

  let handleAge = () => {
    setAge(age + 1)
  }
  let handleSalary = () => {
    setSalary(sal => sal + 10000)
  }
  return (
    <div>
      {age < 30 && <Title />}
      <h1>Age - {age}</h1>
      <button onClick={handleAge}>Increment Age</button>
      <h1>Salary - {salary}</h1>
      <button onClick={handleSalary}>Increment Salary</button>
    </div>
  )
}

export default Effect