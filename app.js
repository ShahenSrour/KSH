// Toggle between Login and Signup forms
function toggleForms() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}

// Toggle Password Visibility
function togglePassword(id) {
    const passwordInput = document.getElementById(id);
    const toggleIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🔓'; // Icon for visible password
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '🔒'; // Icon for hidden password
    }
}