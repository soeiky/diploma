import headerImage from "../assets/wan.avif";
import Header from "../Components/Header/Header";
function Home(){
  return (
    <>
    <Header
      title="Page not found"
      image={headerImage}>
      Maybe the page you are looking for was moved or deleted.
    </Header>
  </>
    
  );
}
export default Home;