import "../styles/containers/product-recommend.css";
// import { useNavigate } from "react-router-dom";
const ProductRecommend = ({ data, change }) => {

    // const navigate = useNavigate()
  return (

      <article onClick={() => change(data.id)} className="product__recommend">
       
        <div className="product__header">
          <img src={data.images[0].url} alt="" />
        </div>
        <h3>{data.brand}</h3>
        <h2>{data.title}</h2>
        <span>${data.price}</span>
      </article>
    
  );
};

export default ProductRecommend;
