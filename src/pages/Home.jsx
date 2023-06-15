import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { isLoading } from "../store/slice/loader.slice";
import axios from "axios";
import { getProductsThunk } from "../store/slice/product.slice";
import { getProductCartThunk } from "../store/slice/cart.slice";
import Aside from "../components/Aside";
import ListProducts from "../components/ListProducts";
import Categories from "../containers/Categories";

const Home = () => {
  const [category, setCategories] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);

  const token = useSelector(state => state.token)
  useEffect(() => {
    dispatch(getProductsThunk());

    token && dispatch( getProductCartThunk() )
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((category) => setCategories(category.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="main">
        <div className="main-grid">
          <Aside>
            <Categories data={category} />
          </Aside>
          <ListProducts dataProduct={data} />


        </div>
      </div>

    </div>
  );
};

export default Home;
