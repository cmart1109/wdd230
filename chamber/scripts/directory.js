const companiesURL = "./data/members.json";

async function getCompanies() {
    try {
        const response = await fetch(companiesURL);
        if (!response.ok) throw new Error("Couldnt find data");
        const data = await response.json();
        displayCompanies(data.members);
        console.log("Se hizo correctamente");
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayCompanies(members) {
    const membersContainer = document.querySelector("#members");

    members.forEach(member => {
        let divMember = document.createElement("div");
        divMember.setAttribute("class", "member");
        let img = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let link = document.createElement("a");

        img.setAttribute("src", member.logo);
        img.setAttribute("alt", member.name);
        address.textContent = member.address;
        phone.textContent = member.phone;
        link.setAttribute("href", member.link);

        divMember.appendChild(img);
        divMember.appendChild(address);
        divMember.appendChild(phone);
        divMember.appendChild(link);
        membersContainer.appendChild(divMember);
    });
}

getCompanies();
