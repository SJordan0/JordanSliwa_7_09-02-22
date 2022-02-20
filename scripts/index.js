import { myFetch } from './modules/fetch.js'
import { getRecipeData } from './modules/recipe.js'

myFetch()

//__Récupération et affichage des données des recettes___//
function getRecipes(json) {
    getRecipeData(json.recipes)
}

export { getRecipes }