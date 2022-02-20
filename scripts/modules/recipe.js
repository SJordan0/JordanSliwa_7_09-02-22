import { openList1, closeList1, openList2, closeList2, openList3, closeList3, closeList } from "./ingredients.js";

let recipesSection = document.querySelector(".recipes_section");
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
    }
}

function displayRecipe() {
    let article = document.createElement( 'article' );
    let img = document.createElement( 'img' );
    let Infos = document.createElement ( 'div' );
    let Name = document.createElement( 'h2' );
    let Ingredients = document.createElement( 'ul' );
    let Time = document.createElement( 'span' );
    let Description = document.createElement( 'p' );

    let Ingredient = recipe.ingredients;
    for (let ingredient of Ingredient) {
      let listItem = document.createElement('li');
      if(!ingredient.quantity && !ingredient.unit){
        listItem.innerHTML = `${ingredient.ingredient}`
      } else if (ingredient.quantity && !ingredient.unit){
      listItem.innerHTML = `${ingredient.ingredient} : ${ingredient.quantity}`
      } else {
        listItem.innerHTML = `${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit}`
      }
      Ingredients.appendChild(listItem);
    }

    Infos.classList.add('info')
    Name.innerHTML = `${recipe.name}`
    Time.innerHTML = `<i class="fa-regular fa-clock"></i> ${recipe.time} min`
    Description.innerHTML = `${recipe.description}`
    article.setAttribute('id', `article${recipe.id}`)

    article.appendChild(img)
    Infos.appendChild(Name)
    Infos.appendChild(Time)
    Infos.appendChild(Ingredients)
    Infos.appendChild(Description)
    article.appendChild(Infos)
    recipesSection.appendChild(article)
}

let open1 = document.querySelector('.ingredients')
let close1 = document.querySelector('.search_bar')
let open2 = document.querySelector('.appareils')
let close2 = document.querySelector('.search_bar')
let open3 = document.querySelector('.ustensiles')
let close3 = document.querySelector('.search_bar')
let closeAll = document.querySelector('.filters')

open1.addEventListener('click', () => openList1())
close1.addEventListener('click', () => closeList1())
open2.addEventListener('click', () => openList2())
close2.addEventListener('click', () => closeList2())
open3.addEventListener('click', () => openList3())
close3.addEventListener('click', () => closeList3())
closeAll.addEventListener('mouseup', () => closeList())

export { getRecipeData }