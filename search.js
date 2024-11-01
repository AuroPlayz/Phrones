document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    const searchBar = document.getElementById("search-bar");

    // Add an event listener to the search bar
    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();
        displayProducts(searchTerm);
    });
});

// Sample products data (this can be dynamically fetched from an API in a real application)
const productsData = [
    { id: 1, name: "Product A", price: 19.99, image: "images/product-a.jpg" },
    { id: 2, name: "Product B", price: 29.99, image: "images/product-b.jpg" },
    { id: 3, name: "Product C", price: 39.99, image: "images/product-c.jpg" },
    { id: 4, name: "Product D", price: 49.99, image: "images/product-d.jpg" },
];

// Function to display products based on search term
function displayProducts(searchTerm = '') {
    const productsList = document.getElementById("products-list");
    productsList.innerHTML = ''; // Clear existing products

    const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );

    filteredProducts.forEach(product => {
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
