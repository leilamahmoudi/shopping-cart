import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartIcon from "../components/CartIcon";
import data from "../data/inventory.json";

function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = data.items.find((item) => item.id === parseInt(id));

  const [selectedOption, setSelectedOption] = useState(null);
  const [addedMessage, setAddedMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleOptionChange = (event) => {
    const optionIndex = event.target.value;
    setSelectedOption(product.options[optionIndex]);
  };

  const handleAddToCart = () => {
    if (!selectedOption) {
      setErrorMessage("Please select a variant before adding to cart.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    if (selectedOption.quantity === 0) {
      setErrorMessage("Selected variant is out of stock.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    addToCart(product, selectedOption);
    setAddedMessage("Added to cart!");
    setErrorMessage("");
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
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>

          {errorMessage && (
            <p style={{ color: "red", marginTop: "1rem" }}>{errorMessage}</p>
          )}
          {addedMessage && (
            <p style={{ color: "green", marginTop: "1rem" }}>{addedMessage}</p>
          )}
        </div>
      ) : (
        <p style={{ color: "red" }}>Product is unavailable</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
