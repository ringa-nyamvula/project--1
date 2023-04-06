// Define the URL of the server endpoint that allows reading recipes
const recipesEndpoint = 'https://rich-pink-crane-sock.cyclic.app/';

// Function to fetch recipes from the server
function fetchRecipes() {
  // Use the fetch API to make a GET request to the recipes endpoint
  fetch(recipesEndpoint)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Display the recipes
      data.forEach(recipe => {
        displayRecipe(recipe);
      });
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
}

// Function to display a recipe on the page
function displayRecipe(recipe) {
  // Create the recipe display using JavaScript only
  const recipeNameElement = document.createElement('h1');
  recipeNameElement.textContent = recipe.name;
  document.body.appendChild(recipeNameElement);

  const ingredientsListElement = document.createElement('ul');
  recipe.ingredients.forEach(ingredient => {
    const ingredientElement = document.createElement('li');
    ingredientElement.textContent = ingredient;
    ingredientsListElement.appendChild(ingredientElement);
  });
  document.body.appendChild(ingredientsListElement);

  const instructionsListElement = document.createElement('ol');
  recipe.instructions.forEach(instruction => {
    const instructionElement = document.createElement('li');
    instructionElement.textContent = instruction;
    instructionsListElement.appendChild(instructionElement);
  });
  document.body.appendChild(instructionsListElement);

  // Create the like button using JavaScript only
  const likeButtonElement = document.createElement('button');
  likeButtonElement.textContent = 'Like';
  likeButtonElement.addEventListener('click', () => {
    // Increment the likes count and update the display
    recipe.likes++;
    likesCountElement.textContent = `Likes: ${recipe.likes}`;

    // Update the likes on the server
    updateLikes(recipe.name, recipe.likes);
  });
  document.body.appendChild(likeButtonElement);

  // Create the likes count display using JavaScript only
  const likesCountElement = document.createElement('p');
  likesCountElement.textContent = `Likes: ${recipe.likes}`;
  document.body.appendChild(likesCountElement);

  // Function to update the likes on the server
  function updateLikes(recipeName, newLikes) {
    // Use the fetch API to make a POST request to the update likes endpoint
    fetch(updateLikesEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: recipeName,
        likes: newLikes
      })
    })
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Do something with the response data, e.g. display a success message
        console.log('Likes updated successfully:', data);
      })
      .catch(error => {
        console.error('Error updating likes:', error);
      });
  }
}

// Call the fetchRecipes function to display the recipes
fetchRecipes();
