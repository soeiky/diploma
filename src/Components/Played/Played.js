import Nav from "../Nav/Nav";
import Logo from "../ui/Logo/Logo";
import classes from "./Played.module.css";

function played({ open, toggle }) {
  const classNames = [classes.Drawer];
  if (open) {
    classNames.push(classes.open);
  }

  return (
    <div className={classNames.join(" ")}>
      <div onClick={toggle} className={classes.backdrop}></div>
      <div className={classes.content}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Played; 