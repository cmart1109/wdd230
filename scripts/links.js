const linksURL = "./data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error("Error al cargar los datos");
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.querySelector("#links"); 
    const ul = document.createElement("ul"); 

    weeks.forEach(week => {
        let li = document.createElement("li");
        li.textContent = `${week.week}: `; 

        week.links.forEach((link, index) => {
            let anchor = document.createElement("a");
            anchor.setAttribute("href", link.url);
            anchor.textContent = link.title;

            li.appendChild(anchor);
            if (index < week.links.length - 1) {
                let separator = document.createTextNode(" | ");
                li.appendChild(separator);
            }
        });

        ul.appendChild(li);
    });

    linksContainer.appendChild(ul); 
}

getLinks();
