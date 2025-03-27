document.getElementById("userForm").addEventListener("submit", function(event) {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm");
    let errorMessage = document.getElementById("passwordError");

    if (password.value !== confirmPassword.value) {
        event.preventDefault(); 
        errorMessage.textContent = "Passwords do not match. Please try again.";
        errorMessage.style.color = "red";
        password.value = "";
        confirmPassword.value = "";
        password.focus();
    } else {
        errorMessage.textContent = "";
    }
});
