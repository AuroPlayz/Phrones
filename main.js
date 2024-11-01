document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("login-section");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        // User is logged in, show "My Account" link
        loginSection.innerHTML = `
            <a href="account.html">My Account</a>
            <a href="#" onclick="logout()">Logout</a>
        `;
    } else {
        // User is not logged in, show "Login" link
        loginSection.innerHTML = `
            <a href="login.html">Login</a>
            <a href="register.html">Register</a>
        `;
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "index.html";  // Redirect to homepage after logout
}
