import { openList1, closeList1, openList2, closeList2, openList3, closeList3, closeList } from "./list.js";
import { mySearchFunction, mySearchFunctionIngredients, mySearchFunctionAppareils, mySearchFunctionUstensils } from './search.js'

let recipesSection = document.querySelector(".recipes_section");
let listIngredients = document.getElementById("listIngredients");
let listAppareils = document.getElementById("listAppareils");
let listUstensils = document.getElementById("listUstensils");
let searchBar = document.getElementById("searchBar")
let searchIngredients = document.getElementById('searchIngredients')
let searchAppareils = document.getElementById('searchAppareils')
let searchUstensils = document.getElementById('searchUstensils')
let recipe

const recettes = []
const ingredients = [];
const appareils = [];
const ustensils = [];

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
        // console.log(i)

    }
}

// class Ingredients {
//   constructor(ingredients) {
//     this.ingredients = ingredients
//   }
// }

// function getRecipeIngredients(ingredients) {
//   for (let j = 0; j < ingredients.length; j++) {
//     ingredient = new Ingredients (
//       ingredients[j].ingredient
//     )
//     displayIngredients(ingredients[j])
//   }

// }

// var Ing = [];
// var j = 0;
// let item;
// let Li = recipesSection.getElementsByTagName('li');

// function displayIngredients(){
//   while (j < Li.length) {
//     item = Li[j];
//     j++;
//     Ing.push(item);
//   }

//   for (var k = 0; k < Ing.length; k++){
//     let listItem = document.createElement('li');
//     listItem.innerHTML = Ing[k].innerHTML;
//     listIngredients.appendChild(listItem);
//     console.log(Ing[k].innerHTML);
//   }

//   // let Ingredient = recipe.ingredients;
//   // for (let ingredient of Ingredient) {
//   //   let listItem = document.createElement('li');
//   //   listItem.innerHTML = `${ingredient.ingredient}`
//   //   listIngredients.appendChild(listItem)
//   // }
//   console.log(j);
//   console.log(Ing);
// }

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
    recipesSection.appendChild(article)
    recettes.push(article.innerHTML.toLowerCase())
}

function displayIngredients() {

  let Ing = recipe.ingredients;


   for (let ingredient of Ing) {

   if(ingredients.filter(ing => ing == ingredient.ingredient.toLowerCase()).length == 0) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${ingredient.ingredient}`
    listIngredients.appendChild(listItem)
   ingredients.push(ingredient.ingredient.toLowerCase())
   }
 }
//  console.log(ingredients)


// let recipeId = recipesSection.querySelector(`#article_${recipe.id}`);
// let info = recipeId.querySelector('.info');
// let ul = info.querySelector('ul')
// let li = ul.getElementsByTagName('li')
// for (let ingredient of li) {
//   let item = document.createElement('li');
//   item.innerHTML = ingredient.outerText;
//   listIngredients.appendChild(item);
// }
// console.log(ul);
// console.log(li);

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


searchBar.addEventListener('keyup', mySearchFunction)
searchIngredients.addEventListener('keyup', mySearchFunctionIngredients)
searchAppareils.addEventListener('keyup', mySearchFunctionAppareils)
searchUstensils.addEventListener('keyup', mySearchFunctionUstensils)


let open1 = document.querySelector('.ingredients')
let close1 = document.querySelector('#iconClose1')
let open2 = document.querySelector('.appareils')
let close2 = document.querySelector('#iconClose2')
let open3 = document.querySelector('.ustensiles')
let close3 = document.querySelector('#iconClose3')
let closeAll = document.querySelector('.filters')

open1.addEventListener('click', () => openList1())
close1.addEventListener('click', () => closeList1())
open2.addEventListener('click', () => openList2())
close2.addEventListener('click', () => closeList2())
open3.addEventListener('click', () => openList3())
close3.addEventListener('click', () => closeList3())
closeAll.addEventListener('mouseup', () => closeList())

export { getRecipeData, recettes, ingredients, appareils, ustensils }