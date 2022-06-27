import Product from "../../pages/Product";
import "./Header.css";

function Header({image, title, children}) {
  return (
    <header>
      <div className="overlay">
        <img src={image}/>
        <h1>{title}</h1>
       
        <p>{children}</p>
        <br></br>

        
      </div>
    </header>
  );
}

export default Header;
