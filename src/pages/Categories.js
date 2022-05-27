import productImage from "../assets/new.jpg";
import CategoryList from "../Components/CategoryList/CategoryList";


import Header from "../Components/Header/Header";
import { getCategories } from "../data/categories";

function Categories() {
  return (
    <>
      <div className="Products">
      <Header  image={productImage} >
      

      </Header>
      </div>
      <CategoryList categories={getCategories()} />

    </>
  );
}

export default Categories;
