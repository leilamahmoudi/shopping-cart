import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartIcon() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/checkout" style={{ position: "fixed", top: 20, right: 20 }}>
      🛒 Cart ({itemCount})
    </Link>
  );
}

export default CartIcon;
