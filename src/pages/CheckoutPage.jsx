import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CartIcon from "../components/CartIcon";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * parseFloat(item.product.price),
    0
  );

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <CartIcon />
        <h1>Your cart is empty</h1>
        <Link to="/" style={{ display: "inline-block", marginBottom: "1rem" }}>
          <button>Go back to shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <CartIcon />
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <CartItem key={item.key} item={item} />
      ))}
      <h2>Total: {totalPrice} SEK</h2>
      <button>Proceed to Payment (Not implemented)</button>
      <Link to="/" style={{ display: "inline-block", marginBottom: "1rem" }}>
        <button>← Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CheckoutPage;
