const container =
document.getElementById("productContainer");

function loadProducts(items){

container.innerHTML="";

items.forEach(product=>{

container.innerHTML += `

    <div class="product-card">

    <img src="${product.image}" alt="${product.name}" onerror="this.src='images/laptop.jpg'">

    <h3>${product.name}</h3>

    <p class="price">₹${product.price}</p>

    <p class="rating">
    ⭐ ${product.rating}
    </p>

    <div class="buttons">

    <button class="cart-btn">
    Add Cart
    </button>

    <button class="wishlist-btn">
    Wishlist
    </button>

    </div>

    </div>

    `;

});

}

loadProducts(products);

document
.getElementById("searchInput")
.addEventListener("keyup",(e)=>{

const value =
e.target.value.toLowerCase();

const filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);

loadProducts(filtered);

});