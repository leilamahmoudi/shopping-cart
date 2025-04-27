import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.key, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.key, item.quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(item.key);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>{item.product.name}</h3>
      <p>
        Variant:{" "}
        {Object.entries(item.option)
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ")}
      </p>
      <p>Price: {item.product.price} SEK</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={handleDecrease} disabled={item.quantity === 1}>
        -
      </button>
      <button onClick={handleIncrease}>+</button>
      <button
        onClick={handleRemove}
        style={{ marginLeft: "1rem", color: "red" }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
