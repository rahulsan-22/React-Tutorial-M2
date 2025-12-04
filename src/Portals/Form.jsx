import { createPortal } from "react-dom"

const Form = () => {
  return createPortal(
    <form>
      <fieldset>
        <legend>Log-in Form</legend>
        <input type="email" placeholder='Enter your email' /><br /><br />
        <input type="password" placeholder='Enter your password' /><br /><br />
        <input type="submit" value="Log In" />
      </fieldset>
    </form>,
    document.getElementById("portal")
  )
}

export default Form