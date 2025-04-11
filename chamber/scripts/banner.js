const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const bannerContainer = document.getElementById("banner-container");
const today = new Date();
const day = days[today.getDay()];

function showBanner(day) {
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday") {
        let banner = document.createElement("div");
        banner.setAttribute("class", "banner");
        let title = document.createElement("h1");
        let text = document.createElement("p");
        let button = document.createElement("button");
        title.textContent = "Meet us at The Tegucigalpa Central Park! Today at 7:00 PM!";
        text.textContent = "We are going to discuss related to our job opportunities, business development and more!.";
        button.textContent = "X";
        button.setAttribute("id", "banner-close-button");
        button.addEventListener("click", function() {
            bannerContainer.remove(banner);
        });
        
        banner.appendChild(title);
        banner.appendChild(text);
        banner.appendChild(button);
        bannerContainer.appendChild(banner);    
        
    }
}
showBanner(day);   