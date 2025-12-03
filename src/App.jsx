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
// import Cart from './ConditionalRendering/Cart'
// import Password from './ConditionalRendering/Password'

// const App = () => {
//   return (
//     <>
//       <Password isValid={false}/>
//       <Cart items={["Shoes","Watch","Shirts","Pants","Bags"]}/>
//     </>
//   )
// }

// export default App

//!07/11/2025
//!useState()
// import State from './useState/State'

// const App = () => {
//   return <State/>
// }

// export default App

//!12/11/2025
//!useContext()
// import { BiscuitContext, ChocolateContext, MixingContext, UserContext } from './useContext/Instamart'
// import Musarambagh from './useContext/Musarambagh'

// const App = () => {
//   return <>
//     <ChocolateContext value='Kit-Kat'>
//       <BiscuitContext value="Jim-Jam">
//         <MixingContext value="Soda">
//           <UserContext value={{name:"Xyz",place:"Somewhere",age:16,isEmployee:false}}>
//             <Musarambagh />
//           </UserContext>
//         </MixingContext>
//       </BiscuitContext>
//     </ChocolateContext>
//   </>
// }

// export default App

//!13/11/2025
//!Stylings (Global CSS)
// import Global from './Stylings/Global'
// import "./Global.css"

// const App = () => {
//   return <>
//     <Global/>
//   </>
// }

// export default App

//!Module CSS
// import Navbar1 from './Stylings/ModuleCSS/Navbar1'
// import Navbar2 from './Stylings/ModuleCSS/Navbar2'
// const App = () => {
//   return <>
//     <Navbar1/>
//     <Navbar2/>
//   </>
// }

// export default App

//!17/11/2025
//!Tailwind CSS
// import Navbar from './Stylings/TailwindCSS/Navbar'
// const App = () => {
//   return <Navbar/>
// }

// export default App

//!20/11/2025
//!Forms(Uncontrolled)
// import Uncontrolled from './Forms/Uncontrolled'

// const App = () => {
//   return <Uncontrolled/>
// }

// export default App

//!21/11/2025
//!Forms(Controlled)
// import Controlled from './Forms/Controlled'

// const App = () => {
//   return <Controlled/>
// }

// export default App

//!26/11/2025
//!React Hook Form
// import ReactHookForm from './Forms/ReactHookForm'

// const App = () => {
//   return <ReactHookForm/>
// }

// export default App

//!28/11/2025
//!Lifecycle Phases
// import Lifecycle from './LifecyclePhases/Lifecycle'

// const App = () => {
//   return <Lifecycle/>
// }

// export default App

//!29/11/2025
//!Error Boundaries
// import FallbackUI from './ErrorBoundaries/FallbackUI'
// import Welcome from './ErrorBoundaries/Welcome'

// const App = () => {
//   return <>
//     <FallbackUI>
//       <Welcome hero="Pavan" />
//     </FallbackUI>
//     <FallbackUI>
//       <Welcome hero="Monty" />
//     </FallbackUI>
//     <FallbackUI>
//       <Welcome hero="Asnan" />
//     </FallbackUI>
//   </>
// }

// export default App

//!01/12/2025
//!useEffect()
// import Effect from './useEffect/Effect'

// const App = () => {
//   return <Effect/>
// }

// export default App

//!02/12/2025
//!Axios
// import FetchData from './Axios/FetchData'

// const App = () => {
//   return <FetchData/>
// }

// export default App

//!03/12/2025
//!Higher Order Components(HOC)
// import GrandFather from './HigherOrderComponents/GrandFather'

// const App = () => {
//   return <>
//     <GrandFather/>
//   </>
// }

// export default App

//!PureComponents
import Normal from './PureComponents/Normal'
import Pure from './PureComponents/Pure'

const App = () => {
  return <>
    <Normal/>
    <Pure/>
  </>
}

export default App