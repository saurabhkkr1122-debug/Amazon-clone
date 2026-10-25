const params =
new URLSearchParams(
window.location.search
);

const productId =
Number(params.get("id")) || 1;

const product =
products.find(
item => item.id === productId
);

const container =
document.getElementById(
"productDetails"
);

container.innerHTML = `

<div class="product-page">

<div class="gallery">

<img
id="mainImage"
src="${product.image}"
alt="${product.name}">

</div>

<div class="info">

<h1>${product.name}</h1>

<p class="rating">
⭐ ${product.rating}
</p>

<p class="price">
₹${product.price}
</p>

<p>
${product.description}
</p>

<div class="specs">

<h3>Specifications</h3>

<ul>

<li>Brand:
${product.brand}</li>

<li>Status:
${product.stock}</li>

<li>Warranty:
1 Year</li>

<li>Delivery:
Free Shipping</li>

</ul>

</div>

<div class="buttons">

<button
class="cart-btn"
onclick="addToCart(${product.id})">

Add To Cart

</button>

<button
class="buy-btn"
onclick="buyNow()">

Buy Now

</button>

</div>

<div class="review-box">

<h3>Customer Reviews</h3>

<p>
⭐⭐⭐⭐⭐ Excellent product.
Worth every rupee.
</p>

<p>
⭐⭐⭐⭐ Great quality and fast delivery.
</p>

</div>

</div>

</div>

`;

function buyNow(){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

cart.push(product.id);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

window.location.href =
"checkout.html";

}