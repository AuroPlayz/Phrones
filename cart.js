document.addEventListener("DOMContentLoaded", () => {
    displayCartItems();
});

// Function to display cart items
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-list");
    const totalAmountElem = document.getElementById("total-amount");

    cartList.innerHTML = ''; // Clear existing items

    if (cartItems.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
        totalAmountElem.innerText = '0.00';
        return;
    }

    let totalAmount = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="images/product-${item.id}.jpg" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>Price: $${item.price.toFixed(2)}</p>
                <label for="quantity-${item.id}">Quantity:</label>
                <input type="number" id="quantity-${item.id}" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
            </div>
            <p>Subtotal: $<span id="subtotal-${item.id}">${(item.price * item.quantity).toFixed(2)}</span></p>
            <button onclick="removeItem(${item.id})">Remove</button>
        `;
        cartList.appendChild(cartItem);
        totalAmount += item.price * item.quantity;
    });

    totalAmountElem.innerText = totalAmount.toFixed(2);
}

// Function to update item quantity
function updateQuantity(id, quantity) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = cartItems.findIndex(item => item.id === id);
    
    if (itemIndex > -1) {
        cartItems[itemIndex].quantity = parseInt(quantity);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        displayCartItems(); // Refresh cart display
    }
}

// Function to remove an item from the cart
function removeItem(id) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    displayCartItems(); // Refresh cart display
}

// Checkout button functionality
document.getElementById("checkout-button").addEventListener("click", () => {
    window.location.href = "checkout.html"; // Redirect to checkout page
});
