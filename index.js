// Define the URL of the server endpoint that allows reading recipes
const recipesEndpoint = 'https://rich-pink-crane-sock.cyclic.app/meals';

// Function to fetch recipes from the server
function fetchRecipes() {
  // Use the fetch API to make a GET request to the recipes endpoint
  fetch(recipesEndpoint)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      const recipesContainer = document.getElementById('recipes');
      data.forEach(el => {
        // Create a card element for the recipe
        let card = document.createElement('div');
        card.className = 'card';

        // Add the recipe image to the card
        let image = document.createElement('img');
        image.src = el.strMealThumb;
        card.appendChild(image);

        // Add the recipe details to the card
        let detailsDiv = document.createElement('div');
        detailsDiv.className = 'card-details';

        let name = document.createElement('p');
        name.textContent = el.strMeal;
        detailsDiv.appendChild(name);

        let step = document.createElement('p');
        step.textContent = el.strInstructions;
        detailsDiv.appendChild(step);

        // Add the like button to the card
        let likeButton = document.createElement('button');
        likeButton.className = 'like-button';
        likeButton.textContent = 'Like';
        likeButton.addEventListener('click', () => {
          // Increase the like count when the button is clicked
          likeCount.textContent = Number(likeCount.textContent) + 1;
        });

        // Add the like count to the card
        let likeCount = document.createElement('span');
        likeCount.textContent = '0';
        detailsDiv.appendChild(likeCount);

        // Add the comment section to the card
        let commentSection = document.createElement('div');
        commentSection.className = 'comment-section';

        let commentTextarea = document.createElement('textarea');
        commentTextarea.placeholder = 'Add a comment';
        commentSection.appendChild(commentTextarea);

        let commentButton = document.createElement('button');
        commentButton.textContent = 'Add';
        commentButton.addEventListener('click', () => {
          let commentText = commentTextarea.value;
          if (commentText) {
            let comment = document.createElement('p');
            comment.className = 'comment';
            comment.textContent = commentText;
            commentSection.insertBefore(comment, commentTextarea);
            commentTextarea.value = '';
          }
        });
        commentSection.appendChild(commentButton);

        detailsDiv.appendChild(likeButton);
        detailsDiv.appendChild(commentSection);

        card.appendChild(detailsDiv);

        recipesContainer.appendChild(card);

         // Hide all cards except the first one
        if (index !== 0) {
          card.style.display = 'none';
        }
      });

      // Create a next button
      let nextButton = document.createElement('button');
      nextButton.textContent = 'Next';
      nextButton.addEventListener('click', () => {
        const cards = document.getElementsByClassName('card');

        if (currentCardIndex < cards.length - 1) {
          // Hide the current card
          cards[currentCardIndex].style.display = 'none';
          // Show the next card
          currentCardIndex++;
          cards[currentCardIndex].style.display = 'block';
        } 
    });
        // Append the next button to the recipes container
        recipesContainer.appendChild(nextButton);
    
  })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
}

// Call the fetchRecipes function to display the recipes
fetchRecipes();
