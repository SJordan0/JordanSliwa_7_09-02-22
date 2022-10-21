import { recettes, ingredients, appareils, ustensils } from "./array.js";

let recipesSection = document.querySelector(".recipes_section");
let listIngredients = document.getElementById("listIngredients");
let listAppareils = document.getElementById("listAppareils");
let listUstensils = document.getElementById("listUstensils");
let recipe

class Recipe {
    constructor(name, id, servings, ingredients, time, description, appliance, ustensils) {
      this.name = name,
      this.id = id,
      this.servings = servings,
      this.ingredients = ingredients,
      this.time = time,
      this.description = description,
      this.appliance = appliance,
      this.ustensils = ustensils
    }
  }
  
function getRecipeData(recipes) {
    for (let i = 0; i < recipes.length; i++ ) {
        recipe = new Recipe(
            recipes[i].name, 
            recipes[i].id, 
            recipes[i].servings, 
            recipes[i].ingredients,
            recipes[i].time,
            recipes[i].description,
            recipes[i].appliance,
            recipes[i].ustensils,
        )
        displayRecipe(recipes[i])
        displayIngredients(recipes[i].ingredients)
        displayAppareils(recipes[i].appliance)
        displayUstensils(recipes[i].ustensils)
    }
}

function displayRecipe() {
    let article = document.createElement('article');
    let img = document.createElement('img');
    let Infos = document.createElement ('div');
    let Name = document.createElement('h2');
    let Ingredients = document.createElement('ul');
    let Time = document.createElement('span');
    let Description = document.createElement('p');
    let Appareil = document.createElement('p');
    let Ustensils = document.createElement('ul');

    let Ingredient = recipe.ingredients;
    for (let ingredient of Ingredient) {
      let listItem = document.createElement('li');
      if(!ingredient.quantity && !ingredient.unit){
        listItem.innerHTML = `${ingredient.ingredient}`
      } else if (ingredient.quantity && !ingredient.unit){
      listItem.innerHTML = `${ingredient.ingredient}: ${ingredient.quantity}`
      } else {
        listItem.innerHTML = `${ingredient.ingredient}: ${ingredient.quantity} ${ingredient.unit}`
      }
      Ingredients.appendChild(listItem);
    }
    Ingredients.classList.add('recipe_ing')

    let Ustensil = recipe.ustensils;
    for(let ustensil of Ustensil) {
      let listItem = document.createElement('li');
      listItem.innerHTML = `${ustensil}`
      Ustensils.appendChild(listItem);
    }
    Ustensils.classList.add('recipe_ust')

    Infos.classList.add('info')
    Name.innerHTML = `${recipe.name}`
    Name.classList.add('title')
    Time.innerHTML = `<i class="fa-regular fa-clock"></i> ${recipe.time} min`
    Description.innerHTML = `${recipe.description}`
    Description.classList.add('description')
    Appareil.innerHTML = `${recipe.appliance}`
    Appareil.classList.add('recipe_app')

    article.appendChild(img)
    Infos.appendChild(Name)
    Infos.appendChild(Time)
    Infos.appendChild(Ingredients)
    Infos.appendChild(Description)
    Infos.appendChild(Ustensils)
    Infos.appendChild(Appareil)
    article.appendChild(Infos)
    article.classList.add('recette')
    recipesSection.appendChild(article)
    recettes.push(article.innerHTML.toLowerCase())
}

function displayIngredients() {

  let Ing = recipe.ingredients;

   for (let ingredient of Ing) {

   if(ingredients.filter(ing => ing == ingredient.ingredient.toLowerCase()).length == 0) {
    ingredients.push(ingredient.ingredient.toLowerCase())
    let listItem = document.createElement('li');
    listItem.innerHTML = `${ingredient.ingredient}`
    listItem.classList.add = ('test')
    listIngredients.appendChild(listItem)
   }
   }
 }

function displayAppareils(){
  let appareil = recipe.appliance;

  if(appareils.filter(app => app == appareil.toLowerCase()).length == 0) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${appareil}`
    listAppareils.appendChild(listItem)
   appareils.push(appareil.toLowerCase())
   }
}

function displayUstensils(){
  let Ust = recipe.ustensils;

  for (let ustensil of Ust) {

  if(ustensils.filter(ust => ust == ustensil.toLowerCase()).length == 0) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${ustensil}`
    listUstensils.appendChild(listItem)
    ustensils.push(ustensil.toLowerCase())
  }
}
}

export { getRecipeData }