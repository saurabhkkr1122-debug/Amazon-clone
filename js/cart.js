function getCart(){

return JSON.parse(
localStorage.getItem("cart")
) || [];

}

function addToCart(id){

let cart = getCart();

cart.push(id);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert("Added To Cart");

}

function updateCartCount(){

const count =
document.getElementById("cartCount");

if(!count) return;

count.innerText =
getCart().length;

}

updateCartCount();