import employees from "./employees.mjs";
import { eventCardTemplate, personCardTemplate } from './templates.mjs';

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
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    // Change this to get the first name's of each person
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function run() {
    employees.foreach(person => addPersonCard(person))
}

run();