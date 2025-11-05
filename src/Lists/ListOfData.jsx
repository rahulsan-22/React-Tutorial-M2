//!Example 1
// const ListOfData = () => {
//   let trainers = ["Pavan", "Monty", "Deva", "Yasin", "Abbas","Monty"]
//   return (
//     <>
//       <h1>List of Trainers 😎</h1>
//       <ul>
//         {trainers.map((element,index,array)=>{
//           return <li key={index}>{element}</li>
//          })
//         }
//       </ul>
//     </>
//   )
// }
// export default ListOfData

//!Example 2
// const ListOfData = () => {
//   let sunday = ["Sleep","Washing Clothes","Cooking","Movies","Cricket"]
//   return (
//     <div>
//       <h1>List of things people usually do on Sunday</h1>
//        <ol>
//         {sunday.map((ele,ind)=>{
//           return <li key={ind}>{ele}</li>
//         })}
//        </ol>
//     </div>
//   )
// }
// export default ListOfData

//!Example 3
import React from 'react'
const ListOfData = () => {
  let heroines = [
    {
      name: "Anushka Shetty",
      age: 43,
      hitMovie: "Arundathi",
      image: "https://static.toiimg.com/photo/115107038/115107038.jpg"
    },
    {
      name: "Samantha",
      age: 38,
      hitMovie: "Eega",
      image: "https://static.toiimg.com/thumb/115779914/115779914.jpg?height=746&width=420&resizemode=76&imgsize=72194"
    },
    {
      name: "Kajal Agarwal",
      age: 40,
      hitMovie: "Magadheera",
      image: "https://i.pinimg.com/564x/46/a4/62/46a462c4517baacd5198e7153c9340e0.jpg"
    }
  ]
  return (
    <div>
      {heroines.map((ele, ind) => {
        return <React.Fragment key={ind}>
          <h1>Name: {ele.name}</h1>
          <img src={ele.image} alt={ele.name} height="300" />
          <h1>Age: {ele.age}</h1>
          <h1>Hit Movie: {ele.hitMovie}</h1>
        </React.Fragment>
      })}
    </div>
  )
}
export default ListOfData