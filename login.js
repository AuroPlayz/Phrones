function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("login-error");

    // Clear any previous error messages
    errorMessage.textContent = "";

    // Check if the username exists in localStorage
    const storedUser = localStorage.getItem(username);

    if (!storedUser) {
        errorMessage.textContent = "Username or password is incorrect";
        return;
    }

    // Parse the stored data and check the password
    const userData = JSON.parse(storedUser);

    if (userData.password === password) {
        // Set the logged-in user in localStorage
        localStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        window.location.href = "index.html";  // Redirect to homepage
    } else {
        errorMessage.textContent = "Username or password is incorrect";
    }
}
