const companiesURL = "../data/members.json";

async function getCompanies() {
    try {
        const response = await fetch(companiesURL);
        if (!response.ok) throw new Error("Couldnt find data");
        const data = await response.json();
        displayCompanies(data.members);
    } catch (error) {
        console.error("Error:", error);
    }
}