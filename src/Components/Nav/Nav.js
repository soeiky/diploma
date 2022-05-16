import classes from "./Nav.module.css";
import Logo from "../ui/Logo/Logo";
import NavToggle from "./NavToggle/NavToggle";
import NavItem from "./Navitem/NavItem";

function Nav() {
  return (
    <nav className={classes.Nav}>
      <div className={classes.container}>
        <Logo />
        <ul>
          <NavItem url="/">Home</NavItem>
          <NavItem url="/products">Products</NavItem>
          <NavItem url="/contacts">Contacts</NavItem>
        </ul>
        <NavToggle />
      </div>
    </nav>
  );
}

export default Nav;
