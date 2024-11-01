document.addEventListener("DOMContentLoaded", () => {
    displayDeals();
});

// Sample deals data (this can be dynamically fetched from an API in a real application)
const dealsData = [
    { id: 1, name: "Product A", price: 19.99, image: "images/product-a.jpg" },
    { id: 2, name: "Product B", price: 29.99, image: "images/product-b.jpg" },
    { id: 3, name: "Product C", price: 39.99, image: "images/product-c.jpg" },
    { id: 4, name: "Product D", price: 49.99, image: "images/product-d.jpg" },
];

// Function to display deals
function displayDeals() {
    const dealsList = document.getElementById("deals-list");
    dealsData.forEach(deal => {
        const dealItem = document.createElement("div");
        dealItem.classList.add("deal-item");
        dealItem.innerHTML = `
            <img src="${deal.image}" alt="${deal.name}">
            <h3>${deal.name}</h3>
            <p>Price: $${deal.price.toFixed(2)}</p>
            <button onclick="addToCart(${deal.id})">Add to Cart</button>
        `;
        dealsList.appendChild(dealItem);
    });
}

// Function to add items to cart
function addToCart(id) {
    const selectedDeal = dealsData.find(deal => deal.id === id);
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === selectedDeal.id);
    
    if (existingItemIndex > -1) {
        // Update quantity if already in cart
        cartItems[existingItemIndex].quantity += 1;
    } else {
        // Add new item to cart
        const cartItem = {
            id: selectedDeal.id,
            name: selectedDeal.name,
            price: selectedDeal.price,
            quantity: 1,
        };
        cartItems.push(cartItem);
    }
    
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert(`${selectedDeal.name} has been added to your cart!`);
}
