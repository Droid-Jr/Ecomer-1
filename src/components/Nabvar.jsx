import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/slice/user.slice";
import { isDark } from "../store/slice/dark.slice";


// import { useState } from "react";
function Nabvar() {




  const token = localStorage.getItem("token");
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const dark = useSelector(state => state.dark)

  // console.log(user)

  // console.log(user)
  const showDropDown = () => {
    document.querySelector(".dropdown").classList.toggle("show--dropdown");
  };
  const showCart = () => {
    document.querySelector(".cart-shop").classList.toggle("show--cart");
  };
  const showMenu = () => {
    document.querySelector(".nav__menu").classList.toggle("show--menu");
  };
  const logout = () => {
    localStorage.removeItem("token")
    dispatch( setUser({}))
    navigate("/")
  }
  const modeDark = () => {
    document.documentElement.classList.toggle('dark')
    dispatch( isDark() )
  };

  // useEffect( ()=>{
  //   user = useSelector(state => state.user)
  // }, [dispatch] )
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav__logo">
            WoW Shop
          </Link>

          <div className="nav__menu">
            <button
              onClick={showMenu}
              type="button"
              className="nav__btn btn--close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <ul className="nav__list">
              <li className="nav__items">
                <Link to={"/"} className="nav__link">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
                {!token && (
                  <Link to="/login" className="nav__link">
                    <i className="fa-solid fa-user"></i> LogIn
                  </Link>
                )}
                {!token && (
                  <Link to="/signup" className="nav__link">
                    <i className="fa-solid fa-user-plus"></i> SignUp
                  </Link>
                )}

                {token && (
                  <Link to="/purchases" className="nav__link">
                    <i className="fa-sharp fa-solid fa-shop-lock"></i> Purchases
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className="nav__buttons">
            <button onClick={modeDark } type="button" className="nav__btn btn--dark">
              <i className={ dark? "fa-solid fa-sun" :"fa-solid fa-moon"}></i>
            </button>
            {token && (
              <button
                onClick={showCart}
                type="button"
                className="nav__btn btn--cart"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className={cart.length > 0 ? "notify show--notify" : "notify" }> {cart.reduce((acc, cv) => acc + cv.quantity, 0 )} </span>
              </button>
            )}
            {token && (
              <div onClick={showDropDown} type="button" className="nav__btn btn--user">
                <i className="fa-solid fa-user"></i>
                <ul className="dropdown">
                  <li>{user.email}</li>
                  <li> <Link to={"/profile"} >Profile</Link>  </li>
                  <li><div>1</div><button onClick={() => logout() }>Cerrar Sesion</button></li>
                </ul>
              </div>
            )}
            <button
              onClick={showMenu}
              type="button"
              className="nav__btn btn--menu"
            >
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </nav>
      </header>

      {token && <Cart />}
    </>
  );
}

export default Nabvar;
