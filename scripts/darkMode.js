const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const standards = document.querySelector("*");

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes("🌙")){
        main.style.background = "#1f1f1f";
        main.style.color = "#ffffff"
        modeButton.textContent = "☀️";     
    } else {
        main.style.background = "#ffffff"
        main.style.color = "#000"
        modeButton.textContent = "🌙"
    }
})