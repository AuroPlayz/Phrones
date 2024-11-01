function completePurchase() {
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Validate that there are items in the cart
    if (cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Example: Simulate payment process (you can expand this)
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;

    // Simple validation for address and pincode
    if (address.trim() === "" || pincode.trim() === "") {
        alert("Please enter a valid address and pincode.");
        return;
    }

    // Simulate payment success
    const paymentSuccess = true; // Simulate successful payment

    if (paymentSuccess) {
        alert("Purchase successful!");

        // Retrieve existing orders from localStorage or initialize an empty array
        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

        // Add each cart item to the orders
        cartItems.forEach(item => {
            existingOrders.push(item); // Add each cart item to the orders array
        });

        // Update localStorage with new orders
        localStorage.setItem("orders", JSON.stringify(existingOrders));

        // Clear the cart after the purchase
        localStorage.removeItem("cart");

        // Redirect to the orders page to view the updated orders
        window.location.href = "orders.html";
    } else {
        alert("Payment failed. Please try again.");
    }
}
