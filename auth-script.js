document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('inputEmailSignUp').value;
    const mobile = document.getElementById('inputMobile').value;
    const password = document.getElementById('inputPasswordSignUp').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else if (!validateMobile(mobile)) {
        alert('Please enter a valid mobile number.');
    } else if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and contain at least one special character.');
    } else {
        // Form is valid, proceed with submission
        alert('Sign up successful! Redirecting to sign-in page...');
        window.location.href = 'Profile.html'; // Redirect to sign-in page
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateMobile(mobile) {
    const re = /^[0-9]{10}$/;
    return re.test(String(mobile));
}

function validatePassword(password) {
    const re = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return re.test(password);
}
