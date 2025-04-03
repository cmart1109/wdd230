let membersData = [];
const companiesURL = "./data/members.json";
const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector(".grid-toggle");
const tableButton = document.querySelector(".table-toggle");

async function getCompanies() {
    try {
        const response = await fetch(companiesURL);
        if (!response.ok) throw new Error("Couldnt find data");
        const data = await response.json();
        membersData = data.members;
        displayCompaniesGrid();
        console.log("Se hizo correctamente");
    } catch (error) {
        console.error("Error:", error);
    }
}

function clearMembersContainer() {
    membersContainer.innerHTML = "";
}

function displayCompaniesGrid(members) {
    clearMembersContainer();
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("table");
    
    membersData.forEach(member => {
        let divMember = document.createElement("div");
        divMember.setAttribute("class", "member");
        let img = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let link = document.createElement("a");
        
        img.setAttribute("src", member.image);
        img.setAttribute("alt", member.name);
        address.textContent = member.address;
        phone.textContent = member.phone;
        link.setAttribute("href", member.websiteURL);
        link.textContent = "Website";
        
        divMember.appendChild(img);
        divMember.appendChild(address);
        divMember.appendChild(phone);
        divMember.appendChild(link);
        membersContainer.appendChild(divMember);
    });
}


function displayCompaniesTable(members) {
    clearMembersContainer();
    membersContainer.classList.add("table");
    membersContainer.classList.remove("grid");
    
    let table = document.createElement("table");
    let body = document.createElement("tbody");
    table.appendChild(body);
    membersData.forEach(member => {
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        let addressCell = document.createElement("td");
        let phoneCell = document.createElement("td");
        let linkCell = document.createElement("td");
        let websiteURL = document.createElement("a");
        websiteURL.setAttribute("href", member.websiteURL);
        websiteURL.textContent = "Website";
        linkCell.appendChild(websiteURL);
        
        nameCell.textContent = member.name;
        addressCell.textContent = member.address;
        phoneCell.textContent = member.phone;
        
        row.appendChild(nameCell);
        row.appendChild(addressCell);
        row.appendChild(phoneCell);
        row.appendChild(linkCell);
        table.appendChild(row);
        membersContainer.appendChild(table);
    });
}


gridButton.addEventListener("click", displayCompaniesGrid);
tableButton.addEventListener("click", displayCompaniesTable); 

getCompanies();
