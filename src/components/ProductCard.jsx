import { Link } from "react-router-dom";

function ProductCard({ product }) {
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
      <h2>{product.name}</h2>
      <p>Price: {product.price} SEK</p>
      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
