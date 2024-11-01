document.addEventListener("DOMContentLoaded", function() {
    loadProducts();
    checkLoginStatus();
});

function loadProducts() {
    const products = [
        { id: 1, name: "Product 1", price: "$10" },
        { id: 2, name: "Product 2", price: "$20" },
    ];
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="viewProduct(${product.id})">View Details</button>
        `;
        productList.appendChild(productItem);
    });
}

function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
        document.getElementById("login-link").style.display = "none";
        document.getElementById("account-link").style.display = "inline";
    }
}
