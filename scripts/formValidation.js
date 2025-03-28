function checkPasswordMatch() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm");
    let errorMessage = document.getElementById("passwordError");

    if (confirmPassword.value !== password) {
        confirmPassword.setCustomValidity("Passwords must match.");
        errorMessage.textContent = "Passwords do not match.";
        errorMessage.style.color = "red";
    } else {
        confirmPassword.setCustomValidity("");
        errorMessage.textContent = "";
    }
}
