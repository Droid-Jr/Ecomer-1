import { useForm } from "react-hook-form";
import "../styles/login.css";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { isLoading } from "../store/slice/loader.slice";
import axios from "axios";
const SignUp = () => {
    const dispatch = useDispatch()
    // "firstName": "john",
    // "lastName": "doe",
    // "email": "john@gmail.com",
    // "password": "john1234",
    // "phone": "1234567890"
    const defaultForm = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": "",
      "phone": ""
    }

  const {register , handleSubmit, reset} = useForm()
  const signUp =  (data) =>  {
    dispatch(isLoading(true))
        axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/users/`, data)
        .then(res => {
           res.data.id ? alert("se creo el usuario") : alert("no se logro crear")
        })
        .catch(err => {
          if (err.response.status === 403) {
            alert("Usuario ya existe!")
          }
          console.log(err)
        }).finally(() => {
          reset(defaultForm)
        dispatch(isLoading(false))
      })
    };

  return (
    <div className="login-box">
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit(signUp)}>
      <div className="user-box">
        <input require type="text" name="firstName" id="firstName" {...register("firstName")}  />
        <label>FirstName</label>
      </div>
      <div className="user-box">
        <input require type="text" name="lastName" id="lastName" {...register("lastName")}  />
        <label>LastName</label>
      </div>
      <div className="user-box">
        <input require type="email" name="email" id="email" {...register("email")}  />
        <label>Email</label>
      </div>
      <div className="user-box">
        <input require type="password" name="password" id="password" {...register("password")} />
        <label>Password </label>
      </div>
      <div className="user-box">
        <input require type="phone" name="phone" id="phone" {...register("phone")} />
        <label>phone</label>
      </div>
     <button type="submit">
      Ingresar
     </button>
    </form>
  </div>
  )
}

export default SignUp