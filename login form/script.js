document.getElementById('submit').addEventListener('click', function() {
    // Dummy credentials for login validation
    const validEmail = "adinda@gmail.com";
    const validPassword = "adinda123";

    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation check
    if (email === validEmail && password === validPassword) {
        alert('Login successful!');
        // Redirect to a new page or take any other action
        window.location.href = "dashboard.html"; // Example redirection
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
