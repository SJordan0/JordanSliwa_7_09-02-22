import { openList1, closeList1, openList2, closeList2, openList3, closeList3, closeList } from "./list.js";

let recipesSection = document.querySelector(".recipes_section");
let listIngredients = document.getElementById("listIngredients");
let listAppareils = document.getElementById("listAppareils");
let listUstensils = document.getElementById("listUstensils");
let searchBar = document.getElementById("searchBar")
let searchIngredients = document.getElementById('searchIngredients')
let searchAppareils = document.getElementById('searchAppareils')
let searchUstensils = document.getElementById('searchUstensils')
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
    article.setAttribute('class', `article ${recipe.id}`)

    article.appendChild(img)
    Infos.appendChild(Name)
    Infos.appendChild(Time)
    Infos.appendChild(Ingredients)
    Infos.appendChild(Description)
    article.appendChild(Infos)
    recipesSection.appendChild(article)
}

function mySearchFunction() {
  var input, filter, article, div, h2, ul, li, item, i, txtValue;
  input = document.getElementById("searchBar");
  filter = input.value.toUpperCase();
  article = document.getElementsByTagName("article");
  div = article.getElementsByClassName("info");
  h2 = div.getElementsByTagName("h2");
  ul = article.getElementsByTagName("ul");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < article.length; i++) {
    item = article[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      article[i].style.display = "";
    } else {
      article[i].style.display = "none";
    }
  }
}

searchBar.addEventListener('keyup', mySearchFunction)

function displayIngredients () {
  let Ingredient = recipe.ingredients;
  for (let ingredient of Ingredient) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${ingredient.ingredient}`
    listIngredients.appendChild(listItem)
  }
}

function mySearchFunctionIngredients() {
  var input, filter, ul, li, item, i, txtValue;
  input = document.getElementById("searchIngredients");
  filter = input.value.toUpperCase();
  ul = document.getElementById("listIngredients");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    item = li[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

searchIngredients.addEventListener('keyup', mySearchFunctionIngredients)

function displayAppareils(){
  let listItem = document.createElement('li');
  listItem.innerHTML = `${recipe.appliance}`
  listAppareils.appendChild(listItem)
}

function mySearchFunctionAppareils() {
  var input, filter, ul, li, item, i, txtValue;
  input = document.getElementById("searchAppareils");
  filter = input.value.toUpperCase();
  ul = document.getElementById("listAppareils");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    item = li[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

searchAppareils.addEventListener('keyup', mySearchFunctionAppareils)

function displayUstensils(){
  let listItem = document.createElement('li');
  listItem.innerHTML = `${recipe.ustensils}`
  listUstensils.appendChild(listItem)
}

function mySearchFunctionUstensils() {
  var input, filter, ul, li, item, i, txtValue;
  input = document.getElementById("searchUstensils");
  filter = input.value.toUpperCase();
  ul = document.getElementById("listUstensils");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    item = li[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

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

export { getRecipeData, displayAppareils }

export const removeDuplicateItemInArray = (array) => array.filter((item, pos) => {
  return array.indexOf(item) == pos;
})