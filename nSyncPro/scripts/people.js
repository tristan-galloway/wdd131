import employees from "./employees.mjs";
import { personCardTemplate } from './templates.mjs';

function addPersonCard(person) {
    const container = document.getElementById('people-container');
    const personInnerHTML = personCardTemplate(person);

    // Create a temporary div to hold the HTML string
    const personDiv = document.createElement('div');
    personDiv.classList.add('person-card');
    personDiv.innerHTML = personInnerHTML;

    // Append the newly created element to the container
    container.appendChild(personDiv);
}


function search() {
    // Get input element
    const input = document.getElementById('searchInput');
    // Convert input so it's not case sensative
    const filter = input.value.toUpperCase();
    // Get the people container and each person card
    const container = document.getElementById('people-container');
    const cards = container.getElementsByClassName('person-card');

    // Iterate through each card and filter person cards based on the text content of the .name element
    // within each card. If the name includes the filter text the card remains visible; otherwise, it is hidden.
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const name = card.querySelector('.name').textContent;
        if (name.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}

function sortEmployeesAlphabetically(employees) {
    return employees.sort((a, b) => {
        const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
        const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
}

function run() {
    const sortedEmployees = sortEmployeesAlphabetically(employees);
    sortedEmployees.forEach(person => addPersonCard(person));
}

run();

document.getElementById('searchInput').addEventListener('keyup', search);