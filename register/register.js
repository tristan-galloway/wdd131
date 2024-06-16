import { successTemplate, participantTemplate } from "./Templates.js";

// When the page loads set the current number of participants equal to 1
let participants = 1;
const buttonElement = document.getElementById('add'); // Add participant button.
const participantsElement = document.querySelector('.participants'); // Participants section.
const formElement = document.querySelector('.testbox > form'); // The entire form element.
const summaryElement = document.getElementById('summary') // The summary section.

// Add an event listener to the button.
buttonElement.addEventListener('click', addParticipant);
// Add an event listener to the form.
formElement.addEventListener('submit', submitForm);

function addParticipant() {
    // Add one to the count of participants.
    participants += 1;

    // Create a copy of the HTML that makes up the participant section of the form.
    let participantHTML = participantTemplate(participants);

    // Create the participant element, add the class, add the inner html, and append it to the document.
    let participantElement = document.createElement('section');
    participantElement.setAttribute('class', `participant${participants}`);
    participantElement.innerHTML = participantHTML;

    // Insert the new HTML into the participants fieldset.
    participantsElement.insertBefore(participantElement, buttonElement);
}

function submitForm(event) {
    // Don't refresh the page.
    event.preventDefault();
    // Sum the total fees.
    const fees = totalFees();
    // Get the adult name from the form.
    const aName = document.getElementById('adult_name').value
    // Create the object holding the info.
    const info = {
        name: aName,
        participants: participants,
        fee: fees
    }
    // Hide the Form.
    formElement.style.display = 'none';
    // Insert the success message into the summary element.
    summaryElement.innerHTML = successTemplate(info)
}

function totalFees() {
    // Get elements with an id starting with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    // Convert node list to an array
    feeElements = [...feeElements];
    // Sum the fees into a total
    let total = 0;
    feeElements.forEach(element => {
        total += parseInt(element.value);
    });
    // Return the total fees.
    return total;
}