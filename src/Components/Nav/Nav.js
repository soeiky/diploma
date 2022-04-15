import "./Nav.css";
import Logo from "../Logo/Logo";
function Nav () {

  return (
    <nav className="Nav" >
     <div>
     <Logo />
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Products</a></li> 
      <li><a href="/">Message</a></li>
      <li><a href="/">Contacts</a></li>
      </ul>
     </div>
    </nav>
  );
}
 
export default Nav;