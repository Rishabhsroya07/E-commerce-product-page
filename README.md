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
