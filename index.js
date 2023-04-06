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
        parentDiv.className = "card";

        let image = document.createElement("img")
        image.src = el.strMealThumb;
        parentDiv.appendChild(image);

        let detailsDiv = document.createElement("div");
        detailsDiv.className = "card-details"


        let name= document.createElement("p")
        name.textContent = el.strMeal;
        detailsDiv.appendChild(name);

       
        let step= document.createElement("p")
        step.textContent = el.strInstructions
        detailsDiv.appendChild(step);

        parentDiv.appendChild(detailsDiv);

        document.querySelector("body").appendChild(parentDiv);
        
        
        
    
     
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
})
}

// Call the fetchRecipes function to display the recipes
fetchRecipes();
