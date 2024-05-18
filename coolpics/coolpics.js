// This function is called by the button in the html.
// It hides all of the menu items except the menu button.
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("hide")
}

function handleResize() {
    let menu = document.getElementById("menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize)

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    let clickedImage = event.target;
    let source = clickedImage.getAttribute('src');

    // get the src attribute from that element and 'split' it on the "-"
    let imageParts = source.split('-');
    let imageName = imageParts[0];
    let imageAlt = imageParts[1];

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let fullSource = imageName + '-full.jpeg';

    // insert the viewerTemplate into the top of the body element
    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    let bodyElement = document.body;
    bodyElement.insertAdjacentHTML('afterbegin', viewerTemplate(fullSource, imageAlt));

    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    let closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}

let gallery = document.querySelector(".gallery")
gallery.addEventListener('click', viewHandler)

function closeViewer() {
    let viewerElement = document.querySelector('.viewer');
    viewerElement.remove();
}

