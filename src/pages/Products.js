import Header from "../Components/Header/Header";
import image from "../assets/header.jpg";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/Products"

import  "./Product.css";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <div className="Product">
      <Header image={product.image} title={product.title}>
        <div className="price">{product.price}</div>
        

        {product.description}
      </Header>
    </div>
  );
}

export default Product;