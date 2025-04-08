const spotlightsURL = "./data/spotlights.json"
const cards = document.querySelector('.cards')

async function getSpotlights() {
    const response = await fetch(spotlightsURL)
    const data = await response.json();
    displaySpotlights(data.spotlights)
    console.log("Los items se estan mostrando correctamente");
}

const displaySpotlights = (spotlights) => {
    spotlights.forEach(spotlight => {
        let card = document.createElement('section');
        card.setAttribute('class', 'advertisements')
        let name = document.createElement('h3');
        let image = document.createElement('img');
        let slogan = document.createElement('p');
        let email = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = `${spotlight.company}`;
        slogan.textContent = `${spotlight.slogan}`;
        email.textContent = `${spotlight.email}`;
        phone.textContent = `${spotlight.phone}`;
        image.setAttribute('src', spotlight.image);
        image.setAttribute('alt', `Image of ${spotlight.company}`);
        image.setAttribute('loading','lazy');

        card.appendChild(name);
        card.appendChild(slogan);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(image);
        cards.appendChild(card);
    });
}

getSpotlights();