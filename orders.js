document.addEventListener("DOMContentLoaded", () => {
    displayOrders();
    displayCart();
});

// Function to display orders
function displayOrders() {
    const ordersList = document.getElementById("orders-list");
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        ordersList.innerHTML = "<p>You have no orders.</p>";
    } else {
        ordersList.innerHTML = ""; // Clear the list first
        orders.forEach((order, index) => {
            const orderItem = document.createElement("div");
            orderItem.classList.add("item");
            orderItem.innerHTML = `
                <span>${order.name}</span>
                <span>Quantity: ${order.quantity}</span>
                <span>Price: $${order.price}</span>
            `;
            ordersList.appendChild(orderItem);
        });
    }
}

// Function to display cart items
function displayCart() {
    const cartList = document.getElementById("cart-list");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartList.innerHTML = ""; // Clear the list first
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("item");
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>Quantity: ${item.quantity}</span>
                <span>Price: $${item.price}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartList.appendChild(cartItem);
        });
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.splice(index, 1); // Remove item from cart array
    localStorage.setItem("cart", JSON.stringify(cartItems)); // Update localStorage
    displayCart(); // Refresh cart display
}
