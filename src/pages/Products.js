import productImage from "../assets/air-monarc.jpg";
import ProductList from "../Components/ProductList/ProductList";
import { getProducts } from "../data/Products";

import Header from "../Components/Header/Header";
import "./Product.css"

function Products() {
  return (
    <>
      <div className="Products">
      <Header title="lorem insup dolor" image={productImage} >
     <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur obcaecati praesentium officia quia autem, veritatis accusantium veniam ad suscipit.</h4>

      </Header>
      </div>
      <ProductList products={getProducts()} />

    </>
  );
}

export default Products;