import Aside from "../components/Aside";
import "../styles/product-detail.css";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { isLoading } from "../store/slice/loader.slice";
import Slider from "../containers/Slider";
import axios from "axios";
import { getProductCartThunk } from "../store/slice/cart.slice";
import ProductRecommend from "../containers/ProductRecommend";
import { updateProductCartThunk, addProductCartThunk } from "../store/slice/cart.slice";

const ProductDetail = () => {
  const { id } = useParams();
  const [idProduct, setIdProduct] = useState(id);
  const [product, setProduct] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [quantity, setQuantity] = useState(1);
  let cart = useSelector((state) => state.cart);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const addProductCart = () => {
    const isValueInCart = cart.find(item => +id === item.productId )
    if (token) {
      if (isValueInCart) {
        const data = {
            id: isValueInCart.id,
            quantity: {
              quantity
            },
          };
          dispatch(updateProductCartThunk(data));
      }else{
        dispatch(addProductCartThunk({ quantity, productId: id }));
      }
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    dispatch(isLoading(true));
    token && dispatch( getProductCartThunk() )
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1//products/${id}`)
      .then((result) => {
        setProduct(result.data);
        axios
          .get(
            `https://e-commerce-api-v2.academlo.tech/api/v1//products?categoryId=${result.data.category.id}`
          )
          .then((res) => {
            setProductCategory(
              res.data.filter((item) => item.id !== result.data.id)
            );
          })
          .catch(console.error);
      })
      .catch(console.error)
      .finally(() => dispatch(isLoading(false)));
  }, [idProduct]);

  const changeView = (id) => {
    setIdProduct(id);
    navigate(`/product/${id}`);
    };
    const plus = () => {
       quantity + 1 === 5 ? alert("Maximo producto") : setQuantity(quantity+1)
      
      };
      const minus = () => {
        quantity > 1 ?  setQuantity(quantity -1) : quantity;
        }
      


  return (
    <div className="container">
      <div className="main">
        <div className="main-grid-detail">
          <article className="product__detail">
            <div className="product__detail__one">
              <span>
                <Link to={"/"}>
                  <i className="fa-solid fa-backward"></i> Back
                </Link>
              </span>
              <div className="product__detail__img">
                <Slider images={product?.images} />
              </div>
            </div>

            <div className="product__detail__two">
              <div className="product__description">
                <h3>{product.brand}</h3>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div className="description__footer">
                  <div className="product__quantity">
                    {token && (
                      <>
                        <button
                          onClick={() => minus()}
                          type="button"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <span className="product__quantity-text">
                          {quantity}
                        </span>
                        <button
                         onClick={() => plus()}
                          type="button"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </>
                    )}
                  </div>
                  <button
                    className="btn-buy"
                    onClick={() => addProductCart()}
                  >
                    <i className="fa-solid fa-cart-plus"></i> Add Cart
                  </button>
                </div>
              </div>
            </div>
          </article>

          <Aside>
            <h3 className="h3-title">Recommends</h3>
            {productCategory.map((data) => (
              <ProductRecommend key={data.id} data={data} change={changeView} />
            ))}
          </Aside>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
