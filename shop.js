document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});

// Sample products data (this can be dynamically fetched from an API in a real application)
const productsData = [
    { id: 1, name: "Product A", price: 19.99, image: "images/product-a.jpg" },
    { id: 2, name: "Product B", price: 29.99, image: "images/product-b.jpg" },
    { id: 3, name: "Product C", price: 39.99, image: "images/product-c.jpg" },
    { id: 4, name: "Product D", price: 49.99, image: "images/product-d.jpg" },
];

// Function to display products
function displayProducts() {
    const productsList = document.getElementById("products-list");
    productsData.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsList.appendChild(productItem);
    });
}

// Function to add items to cart
function addToCart(id) {
    const selectedProduct = productsData.find(product => product.id === id);
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === selectedProduct.id);
    
    if (existingItemIndex > -1) {
        // Update quantity if already in cart
        cartItems[existingItemIndex].quantity += 1;
    } else {
        // Add new item to cart
        const cartItem = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            quantity: 1,
        };
        cartItems.push(cartItem);
    }
    
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert(`${selectedProduct.name} has been added to your cart!`);
}
