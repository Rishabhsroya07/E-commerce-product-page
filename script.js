const PRODUCT = {
  id: 'fall-le-sneakers',
  name: 'Fall Limited Edition Sneakers',
  price: 125.00,
  image: 'images/image-product-1-thumbnail.jpg',
  images: [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
  ]
};

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

/* ---------- Gallery ---------- */
let currentIndex = 0;
const mainImage = $('#mainImage');
const lbImage = $('#lbImage');

function setIndex(i){
  currentIndex = (i + PRODUCT.images.length) % PRODUCT.images.length;
  mainImage.src = PRODUCT.images[currentIndex];
  lbImage.src = PRODUCT.images[currentIndex];
  $$('#thumbs .thumb').forEach(t => t.classList.toggle('active', +t.dataset.index === currentIndex));
  $$('#lbThumbs .thumb').forEach(t => t.classList.toggle('active', +t.dataset.index === currentIndex));
}

$$('#thumbs .thumb').forEach(t => t.addEventListener('click', () => setIndex(+t.dataset.index)));
$$('#lbThumbs .thumb').forEach(t => t.addEventListener('click', () => setIndex(+t.dataset.index)));

$('#mPrev').addEventListener('click', e => { e.stopPropagation(); setIndex(currentIndex - 1); });
$('#mNext').addEventListener('click', e => { e.stopPropagation(); setIndex(currentIndex + 1); });
$('#lbPrev').addEventListener('click', () => setIndex(currentIndex - 1));
$('#lbNext').addEventListener('click', () => setIndex(currentIndex + 1));

/* Lightbox: open ONLY on click of main image (desktop) */
const lightbox = $('#lightbox');
$('#galleryMain').addEventListener('click', (e) => {
  if (e.target.closest('.gallery-nav')) return;
  if (window.innerWidth > 768) {
    lightbox.hidden = false;
  }
});
$('#lbClose').addEventListener('click', () => lightbox.hidden = true);
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.hidden = true; });

/* ---------- Quantity ---------- */
let qty = 0;
const qVal = $('#qVal');
$('#qMinus').addEventListener('click', () => { if (qty > 0){ qty--; qVal.textContent = qty; } });
$('#qPlus').addEventListener('click', () => { qty++; qVal.textContent = qty; });

/* ---------- Cart (localStorage) ---------- */
function getCart(){ try { return JSON.parse(localStorage.getItem('cart')) || []; } catch { return []; } }
function setCart(c){ localStorage.setItem('cart', JSON.stringify(c)); renderCart(); }

function addToCart(){
  if (qty < 1) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === PRODUCT.id);
  if (existing) existing.qty += qty;
  else cart.push({ id: PRODUCT.id, name: PRODUCT.name, price: PRODUCT.price, image: PRODUCT.image, qty });
  setCart(cart);
  qty = 0; qVal.textContent = 0;
}
$('#addCart').addEventListener('click', addToCart);

function removeItem(id){
  setCart(getCart().filter(i => i.id !== id));
}

function renderCart(){
  const cart = getCart();
  const body = $('#cartBody');
  const badge = $('#cartBadge');
  const totalQty = cart.reduce((s,i) => s + i.qty, 0);
  if (totalQty > 0){ badge.hidden = false; badge.textContent = totalQty; }
  else badge.hidden = true;

  if (cart.length === 0){
    body.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    return;
  }
  body.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${i.image}" alt="">
      <div class="ci-info">
        ${i.name}<br>
        $${i.price.toFixed(2)} x ${i.qty} <strong>$${(i.price*i.qty).toFixed(2)}</strong>
      </div>
      <button class="ci-del" data-id="${i.id}" aria-label="Remove">
        <img src="images/icon-delete.svg" alt="">
      </button>
    </div>
  `).join('') + `<a href="checkout.html" class="cart-checkout">Checkout</a>`;
  $$('.ci-del', body).forEach(b => b.addEventListener('click', () => removeItem(b.dataset.id)));
}

/* Cart dropdown toggle */
const dropdown = $('#cartDropdown');
$('#cartBtn').addEventListener('click', e => {
  e.stopPropagation();
  dropdown.hidden = !dropdown.hidden;
});
document.addEventListener('click', e => {
  if (!dropdown.hidden && !dropdown.contains(e.target) && !$('#cartBtn').contains(e.target)){
    dropdown.hidden = true;
  }
});

/* Mobile nav */
const nav = $('#nav'), navOverlay = $('#navOverlay');
$('#menuBtn')?.addEventListener('click', () => { nav.classList.add('open'); navOverlay.classList.add('open'); });
$('#navClose')?.addEventListener('click', () => { nav.classList.remove('open'); navOverlay.classList.remove('open'); });
navOverlay?.addEventListener('click', () => { nav.classList.remove('open'); navOverlay.classList.remove('open'); });

renderCart();
