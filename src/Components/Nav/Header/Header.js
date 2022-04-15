import "./Header.css";
import headerImg from "../../../assets/wan.avif";
function Header() {
  const style = {
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center ",
    width: "100%",
    height: "70vh"
  }
  return(<header className="Header" style={style}> <div> 
    <h1>Sneakers requist</h1> <p>This is an internet shop</p>
    </div>
     </header>);
}

export default Header;
