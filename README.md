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


<img width="1482" alt="Screenshot 2025-04-27 at 23 28 27" src="https://github.com/user-attachments/assets/5b56ca06-b708-4896-825e-9f954039fa11" />

<img width="1481" alt="Screenshot 2025-04-27 at 23 28 49" src="https://github.com/user-attachments/assets/3ef3c934-5225-4de5-8e84-0a5d5a84739a" />


<img width="370" alt="Screenshot 2025-04-27 at 23 31 51" src="https://github.com/user-attachments/assets/80323262-7ae3-4a01-9cbe-de94eddfc88c" />


<img width="374" alt="Screenshot 2025-04-27 at 23 29 39" src="https://github.com/user-attachments/assets/e366a7f0-7fe6-4250-8467-8fd1fa2eaa7b" />


