import Hoc from './Hoc'
import Son from './Son'

const Father = ({properties}) => {
  return <>
     <h1>List of properties father owns</h1>
     <ol>
      {properties.map((ele,ind)=><li key={ind}>{ele}</li>)}
     </ol>
    <Son/>
  </>
}

export default Hoc(Father)