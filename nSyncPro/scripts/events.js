import employees from "./employees.mjs";
import { eventCardTemplate } from "./templates.mjs";

// Normally I will want the server to tell us who is logged in
// to the app so we can get their events, just to get the page dynamically updating
// I will just say the user is John Doe.

function generateCards(person) {
    person.shifts.forEach(shift => addEventCard(shift));
}

function addEventCard(shift) {
    const container = document.getElementById('upcoming-events-container');
    const personInnerHTML = eventCardTemplate(shift);

    // Create a temporary div to hold the HTML string
    const personDiv = document.createElement('div');
    personDiv.classList.add('event-card');
    personDiv.innerHTML = personInnerHTML;

    // Append the newly created element to the container
    container.appendChild(personDiv);
}

function run() {
    const user = employees[0]; // John Doe

    generateCards(user);
}

run();