document.addEventListener("DOMContentLoaded", () => {
    
    const signupButton = document.getElementById("signupButton");
    if (signupButton) {
        signupButton.addEventListener("click", () => {
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            
            if (email && password) {
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);

                window.location.href = "login.html";
            } else {
                alert("Please fill in both email and password.");
            }
        });
    }

    
    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            const email = document.getElementById("loginEmailInput").value;
            const password = document.getElementById("loginPasswordInput").value;

            
            if (email && password) {
                // Get email and password from localStorage
                const storedEmail = localStorage.getItem("email");
                const storedPassword = localStorage.getItem("password");

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
