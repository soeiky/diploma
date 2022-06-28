import headerImage from "../assets/air-monarc.jpg";
import CategoryList from "../Components/CategoryList/CategoryList";
import Header from "../Components/Header/Header";
import { getCategories } from "../data/categories";
import "./Home.css";


function Home() {
  return (
    <>
      <Header
        className="Headerhome"
        title="NIKE welcome to we stores"
        image={headerImage}
      >
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          quasi nulla, harum asperiores excepturi dolor corrupti!
        </h4>
      </Header>

      <div className="Category">
        <h1>Categories</h1>
      </div>
      <CategoryList categories={getCategories()} />

      
    </>
  );
}
export default Home;