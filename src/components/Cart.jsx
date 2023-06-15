import "../styles/cart.css";
import ProductCart from "../containers/ProductCart";
import { useSelector, useDispatch } from "react-redux";
import { addPurchasesThunk } from "../store/slice/cart.slice";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  return (
    <div className="cart-shop">
      <div className="cart__container-shop">
        <div className="cart__header-shop">
          <h3 className="cart__title-shop">Carrito de Compras</h3>
          <button
            onClick={() =>
              document
                .querySelector(".cart-shop")
                .classList.toggle("show--cart")
            }
            type="button"
            className="cart__btn-shop btn--close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="cart__body-shop">
          {data.length > 0 ? (
            data.map((item) => <ProductCart key={item.id} data={item} />)
          ) : (
            <div className="cart__empty">
              <i className="bx bx-cart" />
              <p className="cart__empty--text">
                No hay productos en el carrito
              </p>
            </div>
          )}
        </div>
        <div className="cart__footer-shop">
          <div className="cart__count">
            <span className="cart__count--text">Artículos </span>
            <span className="cart__count--item">
              {" "}
              {data.reduce((acc, cv) => acc + cv.quantity, 0)}
            </span>
          </div>
          <div className="cart__total">
            <span className="cart__total--text">Total</span>
            <span className="cart__total--item">
              {" "}
              $
              {data
                .reduce(
                  (acc, cv) => acc + Number(cv.product.price) * cv.quantity,
                  0
                )
                .toFixed(2)}
            </span>
          </div>
          {
            data.length > 0 &&  <button onClick={ ()=> dispatch( addPurchasesThunk()) }  type="button" className="cart__btn btn--buy">
            Comprar
          </button>
          }
         
        </div>
      </div>
    </div>
  );
};

export default Cart;
