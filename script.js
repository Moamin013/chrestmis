// Array to store cart items
let cart = [];

// Function to update the shopping cart
function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    cartItemsList.innerHTML = ""; // Clear the cart items
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        totalPrice += parseFloat(item.price);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Add item to cart when "Add to Cart" button is clicked
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-product");
        const productPrice = button.getAttribute("data-price");

        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

// Checkout button functionality (you can customize this part as needed)
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length > 0) {
        alert("Proceeding to checkout!");
        // Here you could implement your checkout logic
    } else {
        alert("Your cart is empty!");
    }
});
