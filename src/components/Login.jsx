
import { useForm } from "react-hook-form";
import "../styles/login.css";
import { useNavigate } from 'react-router-dom'
import {  useDispatch, useSelector } from "react-redux";
import { isLoading } from "../store/slice/loader.slice";
import axios from "axios";
import {setUser1 } from '../store/slice/user.slice'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register , handleSubmit} = useForm()

 const login =  (data) =>  {
  dispatch(isLoading(true))
      axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/users/login`, data)
      .then(res => {
          dispatch( setUser1(10) )
          console.log("data:")
          //localStorage.setItem("token", res.data?.token)
          
          //navigate("/")
      })
      .catch(err => {
        if (err.response.status === 401) {
          alert("Credenciales incorrectas")
        }
        console.log(err)
      }).finally(() => dispatch(isLoading(false)))
  };
return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(login)}>
        <div className="user-box">
          <input type="email" name="email" id="email" {...register("email")}  />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" id="password" {...register("password")} />
          <label>Password</label>
        </div>
       <button type="submit">
        Ingresar
       </button>
      </form>
    </div>
  );
};

export default Login;
