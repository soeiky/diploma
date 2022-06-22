import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import ProductList from "../Components/ProductList/ProductList";
 import { getCategory } from "../data/categories";
import { getProducts } from "../data/Products";
import CartButton from "../Components/CartButton/CartButton";
function Category() {
const params = useParams();
const category = getCategory(params.categoryId);


if (!category) {
   return null;
   }
  
  return (
    <div className="Category">
    <Header  title={category.title} image={category.image}>
        {category.description}
       
      </Header> 
      <ProductList products={getProducts(category.categoryId)}/>
      <CartButton productId={params.productId} />
    </div>
  );
}

export default Category;