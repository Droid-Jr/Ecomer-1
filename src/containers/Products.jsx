import "../styles/containers/products.css";
import { useDispatch } from "react-redux";
import { addProductCartThunk } from "../store/slice/cart.slice";
import { useNavigate, Link } from "react-router-dom";

const Products = ({ dataProduct }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cart = useSelector(state => state.cart)
  const addProductCart = (id) => {
    const token = localStorage.getItem("token");
    token
      ? dispatch(addProductCartThunk({ quantity: 1, productId: id }))
      : navigate("/login");
  };

  return (
    <article className="card-product">
      <Link className="link-article" to={`/product/${dataProduct.id}`}>
        <div className="card__img">
          <img src={dataProduct.images[0].url} alt={dataProduct.title} />
        </div>
        <div className="card__body">
          <div className="card__title">
            <label>{dataProduct.brand}</label>
            <label>{dataProduct.title}</label>
            <label>{dataProduct.category.name}</label>
          </div>
          <div className="card__price">
            <label>$ {dataProduct.price}</label>
          </div>
        </div>
      </Link>
      <div className="card__footer">
        <button
          onClick={() => addProductCart(dataProduct.id)}
          className="btn-shop"
        >
          <i className="fa-solid fa-cart-plus"></i> Add Cart
        </button>
      </div>
    </article>
  );
};

export default Products;
