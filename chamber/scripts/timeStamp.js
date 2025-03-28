document.addEventListener("DOMContentLoaded", function() {
    const timestampField = document.getElementById("timestamp");
    const now = new Date().toISOString();
    timestampField.value = now;
});