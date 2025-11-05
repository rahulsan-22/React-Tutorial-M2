//!JSX
// const JavascriptXtension = () => {
//   return <h1>I'm JavascriptXtension(JSX)</h1>
// }

// export default JavascriptXtension

//!Rules
//*1)Adjacent JSX Elements must be wrapped in a single parent element
// const JavascriptXtension = () => {
//   return (
//   <div>
//     <h1>Heading</h1>
//     <p>Lorem ipsum dolor sit</p>
//   </div>
//   )
// }
// export default JavascriptXtension

//!Note:Fragments
// import React from 'react'
// const JavascriptXtension = () => {
//   return (
//     <React.Fragment>
//        <h1>Heading</h1>
//        <p>Lorem ipsum dolor sit</p>
//     </React.Fragment>
//   )
// }

// export default JavascriptXtension

//*2)Unpaired Tags must be closed properly
// const JavascriptXtension = () => {
//   return <>
//     <img src="vite.svg" />
//     <input />
//   </>
// }
// export default JavascriptXtension

//*3)Attributes like class and for should be replaced with className and htmlFor
// const JavascriptXtension = () => {
//   return <>
//     <h1 className="something">Heading</h1>
//     <label htmlFor="name">Name</label>
//   </>
// }
// export default JavascriptXtension

//*4)JSX Elements should always be written in lowercase
// const JavascriptXtension = () => {
//   return <>
//     <H1>Heading</H1>❌
//     <h1>Heading</h1> ✅
//   </>
// }
// export default JavascriptXtension

//!Expression
const JavascriptXtension = () => {
  let firstName = "Pavan"
  let lastName = "Shetty"
  let product = (a,b)=> a*b
  let details = {
    place:"Mysore",
    state:"Karnataka"
  }
  let {place,state}=details
  return (
    <div>
      <h1>2 + 2 = {2+2}</h1>
      <h1>My fullname is <mark>{firstName} {lastName}</mark></h1>
      <h1>The product of 2*2 is : {product(2,2)}</h1>
      <h1>My skills are : {["Singing","Dancing"]}</h1>
      <h1>I am from {place} , {state}</h1>
    </div>
  )
}
export default JavascriptXtension