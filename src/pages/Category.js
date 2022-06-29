import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import ProductList from "../Components/ProductList/ProductList";
import { getCategory } from "../data/categories";
import { getProducts } from "../data/products";
function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);

  if (!category) {
    return null;
  }
  
  return (
    <div className="Category">
      <Header  title={category.title2} image={category.headerImage}>
        {category.description}
       
      </Header>
      <ProductList products={getProducts(category.categoryId)}/>
    </div>
  );
}

export default Category;