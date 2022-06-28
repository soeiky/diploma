import headerImage from "../assets/third.jpg";
import Header from "../Components/Header/Header";

function NotFound() {
  return (
    <>
      <Header
        title="Store of shoes"
        image={headerImage}>
        Maybe the page you are looking for was moved or deleted.
      </Header>
    </>
  );
}

export default NotFound;