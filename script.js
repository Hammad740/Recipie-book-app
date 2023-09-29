const API_KEY = 'b85bb7f65dc04deeaeb4ab6afd512590';
const recipeListEl = document.getElementById('recipe-list');
function displayRecipes(recipes) {
  recipeListEl.innerHTML = '';
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement('li');
    recipeItemEl.classList.add('recipe-item');
    const recipeImageEl = document.createElement('img');
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = 'recipe image';
    const recipeTitleEl = document.createElement('h2');
    recipeTitleEl.innerText = recipe.title;
    const recipeIngridientsEl = document.createElement('p');
    recipeIngridientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(', ')}`;

    const recipeLinkEl = document.createElement('a');
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = 'View Recipe';
    //**appending child */
    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngridientsEl);
    recipeItemEl.appendChild(recipeLinkEl);

    recipeListEl.appendChild(recipeItemEl);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}
init();
