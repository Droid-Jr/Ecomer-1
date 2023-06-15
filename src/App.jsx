import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Nabvar";
import Loader from "./components/Loader";
import {useSelector} from "react-redux"
import Purchases from "./pages/Purchases"
import ProtectedRoutes from "./components/ProtectedRoutes";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
// import Cart from "./components/Cart";


function App() {
  const isLoading = useSelector( state => state.loader )

  return (
    <HashRouter>
    { isLoading && < Loader /> }
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<SignUp />} path="/signup" />
      <Route element={ <ProtectedRoutes /> } >
        <Route element={<Purchases />} path="/purchases" />
        <Route element={<Profile/>} path="/profile"/>
      </Route>
      <Route element={<ProductDetail />} path="/product/:id" />
      <Route element={"no se encontro"} path="*" />
    </Routes>
  </HashRouter>
  );
}

export default App;
