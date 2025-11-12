//!Example 1
// import { useState } from "react"
// const State = () => {
//   let [count, setCount] = useState(0)
//   let handleIncrement = () => {
//     setCount(count + 1)
//   }
//   let handleDecrement = () => {
//     setCount(count - 1)
//   }
//   let handleReset = () => {
//     setCount(0)
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }
// export default State

//!Example 2
// import { useState } from "react"
// const State = () => {
//   let [food,setFood] =useState("________")

//   let handleChickenBiryani=()=>{
//      setFood("Chicken Biryani 🐔")
//   }
//   let handleMuttonBiryani=()=>{
//     setFood("Mutton Biryani 🐐")
//   }
//   let handleVegBiryani=()=>{
//     setFood("Veg Biryani 🍅")
//   }
//   return (
//     <div>
//       <h1>My favourite food is : {food}</h1>
//       <button onClick={handleChickenBiryani}>CB</button>
//       <button onClick={handleMuttonBiryani}>MB</button>
//       <button onClick={handleVegBiryani}>VB</button>
//     </div>
//   )
// }

// export default State

//!Example 3
// import { useState } from 'react'
// const State = () => {
//   let [mode, setMode] = useState(true)
//   console.log(mode)
//   let handleMode = () => {
//     setMode(!mode)
//   }
//   return (
//     <div>
//       <button onClick={handleMode}>
//         {mode ? "Light Mode 🌞" : "Dark Mode 🌝"}
//       </button>
//     </div>
//   )
// }
// export default State

//!Example 4
// import { useState } from 'react'

// const State = () => {
//   let [trainers, setTrainers] = useState(["Pavan", "Monty", "Yasin"])
//   let handleAdd = () => {
//     setTrainers([...trainers, "Rahul"])
//   }
//   let handleRemove = () => {
//     setTrainers(trainers.filter((ele) => {
//       return ele !== "Yasin"
//     }))
//   }
//   let handleUpdate = () => {
//     setTrainers(trainers.map((ele) => {
//       return ele == "Pavan" ? "Swathi💘Pavan" : ele
//     }))
//   }
//   return (
//     <div>
//       <h1>List of Trainers 😎</h1>
//       <ul>
//         {trainers.map((ele, ind) => {
//           return <li key={ind}>{ele}</li>
//         })}
//       </ul>
//       <button onClick={handleAdd}>Add a Trainer</button>
//       <button onClick={handleRemove}>Remove a Trainer</button>
//       <button onClick={handleUpdate}>Update a Trainer</button>
//     </div>
//   )
// }

// export default State

//!Example 5
// import { useState } from 'react'

// const State = () => {
//   let [movieDetails, setMovieDetails] = useState(
//     {
//       name: "The Girlfriend",
//       ratings: 9
//     }
//   )
//   let handleRatings = () => {
//     setMovieDetails(
//       {
//         ...movieDetails,
//         ratings: 7.5
//       }
//     )
//   }
//   return (
//     <div>
//       <h1>Movie Name: <mark>{movieDetails.name}</mark></h1>
//       <h1>Movie Ratings: {movieDetails.ratings}⭐</h1>
//       <button onClick={handleRatings}>Update Ratings🌟</button>
//     </div>
//   )
// }

// export default State

//!Example 6
// import { useState, Fragment } from 'react'
// const State = () => {
//   let [restaurant, setRestaurant] = useState(
//     [
//       { id: 1, name: "Kritunga", famousDish: "Ragi Mudde" },
//       { id: 2, name: "Pista House", famousDish: "Haleem" }
//     ]
//   )
//   let handleName = () => {
//     setRestaurant(
//       restaurant.map((ele) => {
//         return ele.id == 1 ? { ...ele, name: "Krishnapatnam" } : ele
//       })
//     )
//   }
//   return (
//     <div>
//       <h1>List of Restaurants</h1>
//       <ul>
//         {restaurant.map((ele) => {
//           return <Fragment key={ele.id}>
//             <li>{ele.name} - {ele.famousDish}</li>
//           </Fragment>
//         })}
//       </ul>
//       <button onClick={handleName}>Change Name</button>
//     </div>
//   )
// }
// export default State

//!Example 7
// import { useState } from 'react'
// import Salary from './Salary'

// const State = () => {
//   let [salary, setSalary] = useState(10000)
//   let handleSalary = () => {
//     setSalary(salary + 10000)
//   }
//   return <>
//     <Salary salaryAmount={salary} fun={handleSalary} />
//   </>
// }

// export default State