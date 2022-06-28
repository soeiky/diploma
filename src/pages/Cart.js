import Header from "../components/Header/Header";
import image from "../assets/third.jpg";
import CartDisplay from "../components/CartDisplay/CartDisplay";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Header
        title="Your Shopping Cart"
        image={image}>
        Please review items in your cart.
      </Header>

      <CartDisplay actions />

      <Link className="Checkout" to="/checkout">Checkout</Link>
    </>
  );
}

export default Cart;
