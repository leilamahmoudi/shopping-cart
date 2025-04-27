# Shopping Cart Assignment 🛒

This is a simple shopping cart application built with **React** and **Vite**.  
It allows users to browse products, select variants, add items to the cart, manage their cart, and proceed to checkout.

---

## 📦 Features

- **Product List View**

  - Browse all available products.
  - See product name and price.
  - Navigate to product details.

- **Product Details View**

  - View product information and available variants.
  - Select variant (e.g., color, storage, power).
  - Add product to the cart (only if available).
  - Visual feedback when product is added.

- **Shopping Cart**

  - View items added to the cart.
  - Update item quantities.
  - Remove items from the cart.
  - Dynamic total price calculation.

- **Checkout View**

  - Final cart overview before payment.
  - Increment, decrement, or remove items.

- **Testing**
  - Unit tests for CartContext (add, remove, update logic).
  - UI tests for ProductListPage (rendering products, View Details buttons).

---

## 🚀 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/leilamahmoudi/shopping-cart
cd shopping-cart
```

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Open your browser at:
   http://localhost:5173

## 🧪 How to Run Tests

Run all tests using:

````bash
npx vitest

Or run in watch mode (for continuous testing):

```bash
npx vitest --watch

````

## 🛠 Tech Stack

- **React**
- **Vite**
- **React Context API**
- **React Router DOM**
- **Testing Library** (`@testing-library/react`)
- **Vitest**

## 📋 Notes

- Data is mocked from a provided JSON file (`src/data/inventory.json`).
- Some variants may be out of stock and are disabled in the selection.
- Basic styling is kept minimal and functional, focusing on implementation over design.
- Tests focus on important functional areas rather than aiming for 100% coverage.
