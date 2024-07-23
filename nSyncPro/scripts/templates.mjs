export function eventCardTemplate(shift) {
    // Create the innerHTML for the event card element
    let eventCardInnerHTML = `
        <h2 class="position">${shift.position}</h2>
        <p class="shift-time">${shift.startTime} - ${shift.endTime}</p>
        <p class="date">${shift.date}</p>
        <p class="event-length">${shift.length}</p>`;

    return eventCardInnerHTML;
}

export function personCardTemplate(person) {
    // Create the innerHTML for the person card element
    let personCardInnerHTML = `
    <img class="profile-img" src="${person.profileIMG}" alt="Image of ${person.firstName}">
    <h2 class="name">${person.firstName} ${person.lastName}</h2>
    <p class="trained-positions">${positions(person)}</p>
    <p class="phone-number">${person.phoneNum.slice(0, 3)}-${person.phoneNum.slice(3, 6)}-${person.phoneNum.slice(6, 10)}</p>`;

    return personCardInnerHTML;
}

function positions(person) {
    const positions = person.positions;
    let positionsString = "";

    // positions.foreach(position => {
    //     positionsString += `${position}, `;
    // })
    
    // Add each position with a comma, if it's the last element don't add a comma
    for (let i = 0; i < positions.length; i++) {
        if (i < positions.length - 1){
            positionsString += `${positions[i]}, `;
        } else {
            positionsString += `${positions[i]}`;
        }
    }

    return positionsString;
} 