import { expect, describe, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "./CartContext";

describe("CartContext", () => {
  it("should add an item to the cart", () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const dummyProduct = { id: 1, name: "Test Product", price: "100" };
    const dummyOption = { color: ["red"] };

    act(() => {
      result.current.addToCart(dummyProduct, dummyOption);
    });

    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0].product.name).toBe("Test Product");
  });

  it("should increment quantity if adding the same item again", () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const dummyProduct = { id: 1, name: "Test Product", price: "100" };
    const dummyOption = { color: ["red"] };

    act(() => {
      result.current.addToCart(dummyProduct, dummyOption);
    });
    act(() => {
      result.current.addToCart(dummyProduct, dummyOption);
    });

    expect(result.current.cartItems[0].quantity).toBe(2);
  });

  it("should remove an item from the cart", () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const dummyProduct = { id: 1, name: "Test Product", price: "100" };
    const dummyOption = { color: ["red"] };

    act(() => {
      result.current.addToCart(dummyProduct, dummyOption);
    });

    const key = result.current.cartItems[0].key;

    act(() => {
      result.current.removeFromCart(key);
    });

    expect(result.current.cartItems).toHaveLength(0);
  });
});
