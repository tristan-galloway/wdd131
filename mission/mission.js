const themeSelector = document.getElementById("theme");
function changeTheme() {
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    // if the value is dark then:
    if (themeSelector.value == "dark")
    {
        // add the dark class to the body
        const body = document.querySelector("body");
        body.classList.add("dark");
        // change the source of the logo to point to the white logo.
        const img = document.querySelector("img")
        img.setAttribute("src", "images/byui-logo_white.png")
        // otherwise
    } else {
        // remove the dark class
        const body = document.querySelector("body");
        body.classList.remove("dark");
        // make sure the logo src is the blue logo.
        const img = document.querySelector("img")
        img.setAttribute("src", "images/byui-logo_blue.webp")
    }
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener("change", changeTheme);