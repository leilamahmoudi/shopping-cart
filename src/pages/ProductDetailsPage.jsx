import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../data/inventory.json";
import CartIcon from "../components/CartIcon";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart, createKey } = useCart();
  const product = data.items.find((item) => item.id === parseInt(id));
  const [selectedOption, setSelectedOption] = useState(null);
  const [addedMessage, setAddedMessage] = useState("");

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleOptionChange = (event) => {
    const optionIndex = event.target.value;
    setSelectedOption(product.options[optionIndex]);
  };

  const handleAddToCart = () => {
    if (!selectedOption || selectedOption.quantity === 0) {
      alert("Please select an available variant");
      return;
    }
    addToCart(product, selectedOption);
    setAddedMessage("Added to cart!");
    setTimeout(() => setAddedMessage(""), 2000);
  };

  return (
    <div className="container">
      <CartIcon />
      <Link to="/" style={{ display: "inline-block", marginBottom: "1rem" }}>
        <button>← Back to Products</button>
      </Link>
      <h1>{product.name}</h1>
      <p>Brand: {product.brand}</p>
      <p>Price: {product.price} SEK</p>

      {product.available ? (
        <div>
          <h3>Select a variant:</h3>
          <select onChange={handleOptionChange} defaultValue="">
            <option value="" disabled>
              Select option
            </option>
            {product.options.map((option, index) => (
              <option
                key={index}
                value={index}
                disabled={option.quantity === 0}
              >
                {Object.entries(option)
                  .filter(([key]) => key !== "quantity")
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(", ")}{" "}
                {option.quantity === 0 ? "(Out of Stock)" : ""}
              </option>
            ))}
          </select>

          <div style={{ marginTop: "1rem" }}>
            <button onClick={handleAddToCart} disabled={!selectedOption}>
              Add to Cart
            </button>
          </div>

          {addedMessage && <p style={{ color: "green" }}>{addedMessage}</p>}
        </div>
      ) : (
        <p style={{ color: "red" }}>Product is unavailable</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
