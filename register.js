function validateRegistration(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    let valid = true;

    // Clear previous errors
    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Check if username is already taken
    if (localStorage.getItem(username)) {
        usernameError.textContent = "Username is taken";
        valid = false;
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain both letters and numbers";
        valid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        // Save the user in localStorage as an object with email and password fields
        const userData = { email, password };
        localStorage.setItem(username, JSON.stringify(userData));
        alert("Registration successful! You can now log in.");
        window.location.href = "login.html";
    }
}
