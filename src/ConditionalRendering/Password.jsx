//!IF-ELSE
import InvalidPassword from "./InvalidPassword"
import ValidPassword from "./ValidPassword"

const Password = ({isValid}) => {
  if(isValid){
    return <ValidPassword/>
  }else{
    return <InvalidPassword/>
  }
}
export default Password

//!TERNARY OPERATOR
import ValidPassword from './ValidPassword'
import InvalidPassword from './InvalidPassword'

const Password = ({isValid}) => {
  return <>
    {isValid ? <ValidPassword/> : <InvalidPassword/>}
  </>
}
export default Password