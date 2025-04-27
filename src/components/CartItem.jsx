import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    if (item.quantity < item.option.quantity) {
      updateQuantity(item.key, item.quantity + 1);
    }
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
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "0.5rem",
        }}
      >
        <button
          onClick={handleDecrease}
          disabled={item.quantity === 1}
          style={{
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            cursor: item.quantity === 1 ? "not-allowed" : "pointer",
            backgroundColor: item.quantity === 1 ? "#ccc" : "#007bff",
            color: "white",
          }}
        >
          -
        </button>

        <button
          onClick={handleIncrease}
          disabled={item.quantity >= item.option.quantity}
          style={{
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            cursor:
              item.quantity >= item.option.quantity ? "not-allowed" : "pointer",
            backgroundColor:
              item.quantity >= item.option.quantity ? "#ccc" : "#007bff",
            color: "white",
          }}
        >
          +
        </button>

        <button
          onClick={handleRemove}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Remove
        </button>
      </div>
      <p>Available Stock: {item.option.quantity}</p>
    </div>
  );
}

export default CartItem;
