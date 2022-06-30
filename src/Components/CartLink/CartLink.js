import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cart from "../../assets/cart.svg";
export default function CartLink() {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });

  return (
    <NavLink to="/cart"><img style={{width: '30px'}} src={cart} alt="cart"/> ({number})</NavLink>

  );
}