//!28/10/2025
//!Components
//*Class Based Component (CBC)
// import React from 'react'
// class App extends React.Component{
//   render(){
//     console.log(this)
//     return <marquee>I'm CBC</marquee>
//   }
// }
// export default App


//*Function Based Component (FBC)
// let App = ()=>{
//   console.log(this)
//   return <marquee>I'm FBC</marquee>
// }
// export default App

//!30/10/2025
//!JSX
// import JavascriptXtension from "./Jsx/JavascriptXtension"
// const App = () => {
//   return <JavascriptXtension />
// }

// export default App

//!01/11/2025
//!Lists
// import ListOfData from './Lists/ListOfData'

// const App = () => {
//   return <ListOfData/>
// }

// export default App

//!03/11/2025
//!Props
// import User from './Props/User'
// const App = () => {
//   return <>
//     <h1>List Of Trainers</h1>

//     <User trainerName="Pavan" age={16} isMarried={true} hasExGirlfriends={undefined} hasKids={null} skills={["Core Java","Singing","Dancing"]} address={{place:"Mysore",pincode:500065}}
//     fun={()=>console.log("Im Core Java Trainer")}/>

//     <User trainerName="Monty" age={28} isMarried={false} hasExGirlfriends={undefined} hasKids={null} skills={["Python","Singing","Dancing"]} address={{place:"Gulbarga",pincode:500065}}
//     fun={()=>console.log("Im Python Trainer")}/>

//   </>
// }
// export default App

//!04/11/2025
//!Props Children
// import Food from './Props/Food'
// const App = () => {
//   return <>
//     <Food>
//       <img src="https://t4.ftcdn.net/jpg/09/12/10/25/360_F_912102578_dpR2r8IstjbBzQWgn2dAegf6SE2gDPNT.jpg" height="300" width="300"/>
//       <h2>Chicken Biryani</h2>
//     </Food>
//     <Food>
//       <img src="https://media.istockphoto.com/id/1261880308/photo/honey-garlic-lollipop-chicken-wings-with-carrots-celery-and-ranch-dip.jpg?s=612x612&w=0&k=20&c=-FgBn4dxi6Z90E1ZhJ9z07PkeWsm7_KvPjZ2j3LAHBA=" height="300" width="300"/>
//       <h2>Chicken Lollipop</h2>
//     </Food>
//   </>
// }

// export default App

//!05/11/2025
//!Props Drilling
// import Anr from './Props/PropsDrilling/Anr'

// const App = () => {
//   return <Anr/>
// }

// export default App

//!06/11/2025
//!Conditional Rendering
import Cart from './ConditionalRendering/Cart'
import Password from './ConditionalRendering/Password'

const App = () => {
  return (
    <>
      <Password isValid={false}/>
      <Cart items={["Shoes","Watch","Shirts","Pants","Bags"]}/>
    </>
  )
}

export default App