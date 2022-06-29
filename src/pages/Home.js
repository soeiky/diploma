import headerImage from "../assets/air-monarc.jpg";
import CategoryList from "../Components/CategoryList/CategoryList";
import Header from "../Components/Header/Header";
import { getCategories } from "../data/categories";
import "./Home.css";



function Home() {
  return (
    <>
      <Header className="Headerhome" title="Welcome to flowers shop"  image={headerImage} >
      <h4>A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae). The biological function of a flower is to facilitate reproduction, usually by providing a mechanism for the union of sperm with eggs.</h4>
        
      </Header>

      
      <CategoryList categories={getCategories()}/>
       

 
        
    </>
  );
}

export default Home;