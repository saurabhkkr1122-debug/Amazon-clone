const productContainer =
document.getElementById(
"shopProducts"
);

let currentProducts =
[...products];

function renderProducts(items){

productContainer.innerHTML = "";

items.forEach(product=>{

productContainer.innerHTML += `

    <div class="product-card">

    <img
    src="${product.image}"
    alt="${product.name}"
    onerror="this.src='images/laptop.jpg'">

    <h3>${product.name}</h3>

    <p class="price">
    ₹${product.price}
    </p>

    <p class="rating">
    ⭐ ${product.rating}
    </p>

    <div class="buttons">

    <button
    class="cart-btn"
    onclick="addToCart(${product.id})">

    Add Cart

    </button>

    <button
    class="wishlist-btn"
    onclick="addToWishlist(${product.id})">

    Wishlist

    </button>

    </div>

    </div>

    `;

});

}

renderProducts(products);

document
.getElementById("searchBox")
.addEventListener("keyup", filterProducts);

document
.getElementById("priceFilter")
.addEventListener("change", filterProducts);

document
.getElementById("ratingFilter")
.addEventListener("change", filterProducts);

document
.getElementById("sortProducts")
.addEventListener("change", filterProducts);

function filterProducts(){

let result = [...products];

const search =
document
.getElementById("searchBox")
.value
.toLowerCase();

const price =
document
.getElementById("priceFilter")
.value;

const rating =
document
.getElementById("ratingFilter")
.value;

const sort =
document
.getElementById("sortProducts")
.value;

if(search){

result = result.filter(item=>

item.name
.toLowerCase()
.includes(search)

);

}

if(price !== "all"){

result = result.filter(item=>

item.price <= Number(price)

);

}

if(rating !== "all"){

result = result.filter(item=>

item.rating >= Number(rating)

);

}

if(sort === "low"){

result.sort(
(a,b)=>a.price-b.price
);

}

if(sort === "high"){

result.sort(
(a,b)=>b.price-a.price
);

}

if(sort === "rating"){

result.sort(
(a,b)=>b.rating-a.rating
);

}

renderProducts(result);

}