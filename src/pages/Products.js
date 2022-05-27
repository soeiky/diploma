import Header from "../Components/Header/Header";
import headerImage from "../assets/air-max.jpg";
import ProductList from "../Components/ProductList/ProductList";
import { getProducts } from "../data/Products";
import Main from "../Components/Main/Main";

function Products() {
  return (
    <>
      <Header
        title="Pick your type of coffee!"
        image={headerImage}>
        The fruits; cherries or berries, most commonly contain two stones with their flat sides together. A small percentage of cherries contain a single seed, instead of the usual two. This is called a "peaberry".
      </Header>
        <Main> <ProductList products={getProducts()} /></Main>

    </>
  );
}

export default Products;