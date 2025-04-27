import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
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
