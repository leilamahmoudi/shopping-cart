import { render, screen } from "@testing-library/react";
import { CartProvider } from "../context/CartContext";
import ProductListPage from "./ProductListPage";
import { BrowserRouter } from "react-router-dom";

describe("ProductListPage", () => {
  it("should render a list of products", () => {
    render(
      <CartProvider>
        <BrowserRouter>
          {" "}
          {/* <-- WRAP HERE */}
          <ProductListPage />
        </BrowserRouter>
      </CartProvider>
    );

    expect(screen.getByText(/Philips hue bulb/i)).toBeInTheDocument();
    expect(screen.getByText(/Trådfria Lampor/i)).toBeInTheDocument();
    expect(screen.getByText(/Playstation 4/i)).toBeInTheDocument();
  });

  it("should show 'View Details' button for each product", () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <ProductListPage />
        </BrowserRouter>
      </CartProvider>
    );

    const buttons = screen.getAllByRole("button", { name: /View Details/i });
    expect(buttons.length).toBeGreaterThan(0);
  });
});
