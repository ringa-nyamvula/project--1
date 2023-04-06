// Define the URL of the server endpoint that allows reading recipes
const recipesEndpoint = 'https://rich-pink-crane-sock.cyclic.app/meals';

// Function to fetch recipes from the server
function fetchRecipes() {
  // Use the fetch API to make a GET request to the recipes endpoint
  fetch(recipesEndpoint)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
     
    data.forEach(el=> {
        let parentDiv = document.createElement("div");
        parentDiv.className = "cards";
        let name= document.createElement("p")
        name.textContent = el.strMeal
        let image = document.createElement("img")
        image.src = el.strMealThumb
        let step= document.createElement("p")
        step.textContent = el.strInstructions
        document.querySelector("body").appendChild(name)
        document.querySelector("body").appendChild(image)
        document.querySelector("body").appendChild(step)
        
        parentDiv.appendChild(image)
        parentDiv.appendChild()
    
     
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
})
}

// Call the fetchRecipes function to display the recipes
fetchRecipes();
