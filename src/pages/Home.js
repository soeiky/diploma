import headerImage from "../assets/wan.avif";
import CategoryList from "../Components/CategoryList/CategoryList";
import Header from "../Components/Header/Header";
import { getCategories } from "../data/categories";
function Home(){
  return (
    <>
    <Header
      title="Page not found"
      image={headerImage}>
      Maybe the page you are looking for was moved or deleted.
    </Header>
    
    <CategoryList categories={getCategories()} />
  </>
    
  );
}
export default Home;