import { myFetch } from './modules/fetch.js'
import { createAcard } from './modules/recipeCard.js'

myFetch()

//__Récupération et affichage des données des photographes___//
function getRecipes(json) {
    const recipes = json.recipes
    showRecipes(recipes)
}

export { getRecipes }

//___Affichage des données___//
function showRecipes(recipes) {
    for (let i = 0; i < recipes.length; i++) {
      createAcard(recipes[i]) 
    }
}