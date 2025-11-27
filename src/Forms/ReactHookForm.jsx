import { useForm } from "react-hook-form"

const ReactHookForm = () => {

  let { register, handleSubmit, formState: { errors } } = useForm()
  console.log(errors)

  let formData = (data) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(formData)}>
        <fieldset>
          <legend>Registration Form🔥</legend>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name should be minimum of 3 characters" },
              maxLength: { value: 10, message: "Name should be maximum of 10 characters" }
            })} />
          {errors.name && <p>{errors.name.message}</p>}
          <br /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email", {
            required: "Email is required"
          })} />
          {errors.email && <p>{errors.email.message}</p>}
          <br /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password should contain minimum of 6 characters" }
          })} />
          {errors.password && <p>{errors.password.message}</p>}
          <br /><br />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              minLength: { value: 10, message: "Please check your phone number" },
              maxLength: { value: 10, message: "Please check your phone number" },
              validate: (value) => !isNaN(value) ? true : "Please enter only numerical values"
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
          <br /><br />

          <label htmlFor="dob">Dob:</label>
          <input type="date" id="dob" {...register("dob", {
            required: "Dob is required",
            min: {
              value: "2000-01-01",
              message: "Should be born after 2000"
            }
          })} />
          {errors.dob && <p>{errors.dob.message}</p>}
          <br /><br />

          <label>Gender:</label>
          <input type="radio" value="male" {...register("gender", { required: "Please select gender" })} />
          <label htmlFor="male">Male</label>
          <input type="radio" value="female" {...register("gender", { required: "Please select gender" })} />
          <label htmlFor="female">Female</label>
          {errors.gender && <p>{errors.gender.message}</p>}
          <br /><br />

          <label>Skills:</label>
          <input type="checkbox" value="Html" {...register("skills", { required: "Select at least one skill" })} />
          <label>Html</label>
          <input type="checkbox" value="Css" {...register("skills", { required: "Select at least one skill" })} />
          <label>Css</label>
          <input type="checkbox" value="Js" {...register("skills", { required: "Select at least one skill" })} />
          <label>Js</label>
          <input type="checkbox" value="React" {...register("skills", { required: "Select at least one skill" })} />
          <label>React JS</label>
          {errors.skills && <p>{errors.skills.message}</p>}
          <br /><br />

          <label htmlFor="country">Country:</label>
          <select id="country" {...register("country", {
            required: "Please select a country",
            validate: (value) => value !== "--Select Country--" ? true : "Please select a country"
          })}>
            <option>--Select Country--</option>
            <option>India</option>
            <option>Australia</option>
            <option>Russia</option>
            <option>Thailand</option>
          </select>
          {errors.country && <p>{errors.country.message}</p>}
          <br /><br />

          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" rows="10" cols="40" {...register("feedback", {
            required: "Feedback is required",
            minLength: { value: 10, message: "Feedback should contain minimum 10 characters" }
          })}></textarea>
          {errors.feedback && <p>{errors.feedback.message}</p>}
          <br /><br />

          <label htmlFor="photo">Upload Id:</label>
          <input type="file" id="photo" {...register("photo", {
            required: "Please upload your ID"
          })} />
          {errors.photo && <p>{errors.photo.message}</p>}
          <br /><br />

          <button type="submit">Register</button>
          <button type="reset">Reset</button>
        </fieldset>
      </form>
    </>
  )
}

export default ReactHookForm
