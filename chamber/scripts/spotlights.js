const spotlightsURL = "./data/members.json"
const cards = document.querySelector('.cards')

async function getSpotlights() {
    const response = await fetch(spotlightsURL)
    const data = await response.json();
    displaySpotlights(data.members)
    console.log("Los items se estan mostrando correctamente");
}

const displaySpotlights = (spotlights) => {
    spotlights.forEach(spotlight => {
        let membership = spotlight.membershipLevel;
        if (membership === "Gold" || membership === "Silver") {
        let card = document.createElement('section');
        card.setAttribute('class', 'advertisements')
        let name = document.createElement('h3');
        let image = document.createElement('img');
        let description = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = `${spotlight.name}`;
        image.setAttribute('src', `${spotlight.mainImage}`);
        image.setAttribute('alt', `${spotlight.name}`); 
        image.setAttribute('loading', 'lazy');
        description.textContent = `${spotlight.description}`;
        address.textContent = `${spotlight.address}`;
        phone.textContent = `${spotlight.phone}`;
            
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(image);
        cards.appendChild(card);
        console.log("Elemento creado correctamente");
        }
    });
}

getSpotlights();