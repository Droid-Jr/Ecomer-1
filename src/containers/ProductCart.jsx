import { useState } from "react";
import "../styles/containers/product-cart.css";
import { useDispatch } from "react-redux";
import {
  updateProductCartThunk,
  deleteProductCartThunk,
} from "../store/slice/cart.slice";

const ProductCart = ({ data }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(data.quantity);
  const updateProductCartPlus = (id) => {
    const quantity1 = quantity + 1;
    if (quantity1 === 4) {
      alert("Se agoto Stock")
    }else{
      setQuantity(quantity1);
      const data = {
        id,
        quantity: {
          quantity: quantity1,
        },
      };
      dispatch(updateProductCartThunk(data));
    }
  
  };
  const updateProductCartMinus = (id) => {
    const quantity1 = quantity - 1;
    if (quantity1 === 0) {
      deleteProductCart(id);
    } else {
      
      setQuantity(quantity1);
      const data = {
        id,
        quantity: {
          quantity: quantity1,
        },
      };
      dispatch(updateProductCartThunk(data));
    }
  };
  const deleteProductCart = (id) => {
    dispatch(deleteProductCartThunk(id));
  };

  return (
    <>
      <article className="article">
        <div className="article__image">
          <img src={data.product?.images[0].url} alt={data.product.title} />
        </div>
        <div className="article__content">
          <h3 className="article__title">{data.product.title}</h3>
          <span className="article__price">$ {data.product.price}</span>
          <div className="article__quantity">
            <button
              onClick={() => updateProductCartMinus(data.id, data.quantity)}
              type="button"
              className="article__quantity-btn article--minus"
              data-id="1"
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <span className="article__quantity-text">{data.quantity}</span>
            <button
              type="button"
              onClick={() => updateProductCartPlus(data.id, data.quantity)}
              className="article__quantity-btn article--plus"
              data-id="1"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <button
            type="button"
            onClick={() => deleteProductCart(data.id)}
            className="article__btn remove-from-cart"
            data-id="1"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </article>
    </>
  );
};

export default ProductCart;
