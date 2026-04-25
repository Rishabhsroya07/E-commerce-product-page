# Sneakers — E-commerce (HTML/CSS/JS)

A simple static e-commerce site built with plain HTML, CSS, and JavaScript.

## Files
- `index.html` — Product page with image gallery, lightbox (click to open), quantity selector, and cart dropdown
- `checkout.html` — Checkout form with validation and order summary
- `style.css` — All styling (responsive)
- `script.js` — Cart + gallery logic (state persisted via localStorage)
- `images/` — Product photos, thumbnails, and SVG icons

## Features
- Click main image to open lightbox (desktop). Lightbox is NOT triggered by hover.
- Click thumbnails to switch the large image
- Add / remove items, edit quantity in cart
- Cart persists across pages via localStorage
- Form validation on checkout (name, email, address, card, expiry, CVV)
- Order summary with $50 shipping and 20% VAT
- Responsive layout for mobile and desktop

## Run
Just open `index.html` in your browser, or serve the folder:
```
python3 -m http.server 8000
```
## 📸 Screenshots

### 🏠 Product Page
![Product Page](./images/product-page.png)

### 🛒 Cart & Checkout
![Checkout Page](<img width="1778" height="868" alt="image" src="https://github.com/user-attachments/assets/0ea25fb0-e4df-4d54-8b22-8a36a26d1be8" />
<img width="1685" height="835" alt="image" src="https://github.com/user-attachments/assets/5cf384f8-ca8b-4be1-a6b0-8eccff5356b4" />

)
## 📁 Project Structure
project-folder/
│
├── index.html # Main product page
├── checkout.html # Checkout page
├── style.css # Styles (responsive)
├── script.js # Cart, gallery, and logic
│
├── images/ # Product images & icons
│ ├── product-1.png
│ ├── thumbnail-1.png
│ └── icons/
│
└── README.md
