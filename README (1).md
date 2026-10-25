# ShopHub – E-Commerce Website

ShopHub is a front-end e-commerce website project built with **HTML, CSS, and JavaScript**. It provides a shopping interface where users can browse featured products, view product details, manage a shopping cart, and proceed through a checkout flow.

> **Project status:** This repository contains the HTML pages and a starter `db.json` file. The pages reference additional CSS and JavaScript files (listed below) that must also be present in the repository for the complete website to run correctly.

## Features

- **Home page:** Shopping festival banner, product categories, featured-products section, and navigation.
- **Product details:** A dedicated page for product information and related products.
- **Shopping cart:** Displays selected products, item count, total price, and a remove-item option.
- **Checkout:** Collects shipping details and lets the user select a payment method.
- **Order confirmation:** Displays a success message after the checkout form is submitted.
- **Browser storage:** The cart is read from and written to `localStorage`.
- **Responsive checkout layout:** The checkout columns change to a single column on smaller screens.

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Browser `localStorage`
- Font Awesome 6.5.1 (loaded through CDN on the home page)
- JSON (`db.json` starter data file)

## Project Structure

The uploaded project files include:

```text
ShopHub/
├── index.html
├── product.html
├── cart.html
├── checkout.html
├── order-success.html
├── db.json
├── css/
│   ├── style.css          # Required by the pages
│   └── product.css        # Required by product.html
└── js/
    ├── products.js        # Product data used by the pages
    ├── app.js             # Home-page product rendering / interactions
    ├── cart.js            # Cart-related functions
    ├── wishlist.js        # Wishlist-related functions
    └── product.js         # Product details and related products
```

The `css/` and `js/` files shown above are referenced by the HTML but were **not included in the files supplied for this README**. Add your actual files to those folders before publishing the complete project. Other pages such as `wishlist.html` and `shop.html` are also linked from the supplied pages; add them if they are part of your project.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repository-name>.git
cd <your-repository-name>
```

Replace the placeholders with your GitHub username and repository name.

### 2. Add the required assets

Make sure the `css/` and `js/` folders contain the files referenced in the Project Structure section. Keep the folder names and file paths unchanged, or update the `<link>` and `<script>` paths in the HTML.

### 3. Run the website

You can open `index.html` directly in a browser. For a more reliable local development experience, run a local static server.

For example, with the **Live Server** extension in Visual Studio Code:

1. Open the project folder in VS Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The website will open in your browser.

## How to Use

1. Open the home page.
2. Browse the featured products.
3. Open a product page to view its details.
4. Add products to the cart using the project's product/cart JavaScript.
5. Open **Cart** to review or remove items.
6. Select **Proceed To Checkout**.
7. Enter the shipping details, choose a payment method, and submit the form.
8. The current checkout page redirects to `order-success.html`.

## Cart and Checkout Notes

- Cart data is stored in the browser under the `cart` key in `localStorage`.
- The cart page expects this value to be an array of product IDs.
- Product information is read from the `products` array made available by `js/products.js`.
- Submitting the checkout form currently clears the cart and redirects to the order-success page.
- The supplied checkout page is a front-end demonstration. It does not show an integrated payment gateway or server-side order processing.

## `db.json`

The supplied `db.json` currently contains empty `products` and `orders` arrays:

```json
{
  "products": [],
  "orders": []
}
```

It is a starter JSON data file. The supplied HTML pages do not currently demonstrate a connection to this file or a backend API. If you plan to use JSON Server, install it and configure the JavaScript/API integration separately.

## Future Improvements

- Add user registration and login.
- Connect products and orders to a backend/database.
- Implement wishlist and category filtering.
- Add quantity controls and persistent order history.
- Integrate a secure payment gateway.
- Add form validation and better error handling.
- Improve accessibility and responsive layouts across all pages.

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

## License

No license has been specified yet. Add a `LICENSE` file if you want to define how others may use, modify, and distribute this project.

---

**Made with HTML, CSS, and JavaScript.**
