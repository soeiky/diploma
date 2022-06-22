import { useParams } from "react-router-dom";
import CartButton from "../Components/CartButton/CartButton";
import Header from "../Components/Header/Header"
import { getProduct} from "../data/Products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);


  if (!product) {
    return null;
  }

  return (
    <>
      <Header
        title={product.title}
        image={product.image}>
        {product.description}
      </Header>
      <CartButton productId={params.productId} />
     
    </>
  );
}

export default Product;