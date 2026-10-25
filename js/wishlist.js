function getWishlist(){

return JSON.parse(
localStorage.getItem("wishlist")
) || [];

}

function addToWishlist(id){

let wishlist =
getWishlist();

if(!wishlist.includes(id)){

wishlist.push(id);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

}

updateWishlistCount();

alert("Added To Wishlist");

}

function updateWishlistCount(){

const count =
document.getElementById(
"wishlistCount"
);

if(!count) return;

count.innerText =
getWishlist().length;

}

updateWishlistCount();