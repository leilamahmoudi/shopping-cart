import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CartIcon from "../components/CartIcon";
import data from "../data/inventory.json";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.items);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <CartIcon />
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListPage;
