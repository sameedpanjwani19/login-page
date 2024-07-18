document.addEventListener("DOMContentLoaded", () => {
    // Function to navigate to login.html and save email and password to localStorage
    const signupButton = document.getElementById("signupButton");
    if (signupButton) {
        signupButton.addEventListener("click", () => {
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            // Check if email and password are filled
            if (email && password) {
                // Save email and password to localStorage
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);

                // Redirect to login.html
                window.location.href = "login.html";
            } else {
                alert("Please fill in both email and password.");
            }
        });
    }

    // Function to navigate to dashboard.html after verifying email and password
    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            const email = document.getElementById("loginEmailInput").value;
            const password = document.getElementById("loginPasswordInput").value;

            // Check if email and password are filled
            if (email && password) {
                // Get email and password from localStorage
                const storedEmail = localStorage.getItem("email");
                const storedPassword = localStorage.getItem("password");

                // Check if the entered email and password match the stored values
                if (email === storedEmail && password === storedPassword) {
                    // Redirect to dashboard.html
                    window.location.href = "dashboard.html";
                } else {
                    alert("Invalid email or password.");
                }
            } else {
                alert("Please fill in both email and password.");
            }
        });
    }
});
