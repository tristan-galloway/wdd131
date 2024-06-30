import recipes from "./recipes.mjs";

// Get a randomNumber between 0 and a upper limit (num).
function randomNumber(num) {
    return Math.floor(Math.random() * num);
};

// Use a random number to get a random recipe.
function getRandomRecipe(list) {
	const listLength = list.length;
	const randomNum = randomNumber(listLength);
	return list[randomNum];
}

// Convert recipe object to a template literal string.
function recipeTemplate(recipe) {
    const recipeElementInnerHTML = `
    <img class="recipe-img" src="${recipe.image}" alt="image of apple crisp">
    <div class="recipe-details">
        ${tagsTemplate(recipe.tags)}
        <h2>${recipe.name}</h2>
        <!-- Rating layout -->
        ${ratingTemplate(recipe.rating)}
        <p class="recipe-description">${recipe.description}</p>
    </div>`

    return recipeElementInnerHTML;
}

// Create each of the tags in the recipe.
function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = "";

    tags.forEach(tag => {
        let tagHTML = `<p class="tags">${tag}</p>
            `;
        html += tagHTML;
    });

	return html;
}

// Create HTML for the rating
function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
        >`;

    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i < 5; i++) {
        // check to see if the current index of the loop is less than our rating
        if (i < rating) {
            // if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>
            `;
        } else {
            // else output an empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>
            `;
        }
    };

    // after the loop, add the closing tag to our string
    html += `</span>`;
    // return the html string
    return html;
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    let recipes = document.getElementById("recipes");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let recipeHTML = recipeTemplate(recipeList);
	// Set the HTML strings as the innerHTML of our output element.
    let recipeElement = document.createElement('div');
    recipeElement.setAttribute('class', 'recipe')
    recipeElement.innerHTML = recipeHTML;

    recipes.appendChild(recipeElement);
}

function init() {
  // get a random recipe
  const recipe = getRandomRecipe(recipes);

  let filteredRecipes = recipes.

  // render the recipe with renderRecipes.
  renderRecipes([filteredRecipes]);
}

init();