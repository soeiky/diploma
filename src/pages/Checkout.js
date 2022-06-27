import Header from "../Components/Header/Header";
import image from "../assets/how.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../data/Products";

function Checkout() {
  const items = useSelector(store => store.cart.items);
  const products = getProducts();

  let total = 0;
  let output = products
    .filter(product => items[product.productId])
    .map(product => {
      total += product.price * items[product.productId];

      return (
        <div>
          <Link to="">{product.title}</Link> {items[product.productId]} ${product.price * items[product.productId]}
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }


  return (
    <>
      <Header
        title="Checkout"
        image={image}>
        Please enter your information.
      </Header>
      <div>
        {output}
        <hr />
        Total: ${total}

        <form>
          <label>
            First name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last name:
            <input type="text" name="lastName" required />
          </label>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" required />
          </label>

          <button>Complete the order</button>
        </form>

      </div>
    </>
  );
}

export default Checkout;