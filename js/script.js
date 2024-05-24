function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission behavior
        checkPassword();
    }
}

function checkPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = 'meow'; // Set your password here
    const tabs = document.getElementById("tabs");
    const passwordForm = document.getElementById('password-form');
    const secretContent = document.getElementById('secret-content');
    const errorMessage = document.getElementById('error-message');

    if (password === correctPassword) {
        passwordForm.style.display = 'none';
        tabs.style.display = "flex";
        secretContent.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}
