import "./Header.css";
import headerImage from "../../assets/one.jpg";

function Header({ image, title, children,   }) {
  return (
    <header className="Header">
      <img src={headerImage} alt="img"  />
      <section>
        
        <h1>
           {title}
        </h1>
        
        <p>{children}</p>
        
      </section>

      
    </header>
  );
}

export default Header;