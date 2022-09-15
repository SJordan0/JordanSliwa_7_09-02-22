// import { displayAppareils, removeDuplicateItemInArray } from "./recipe.js"

// var ingr = []
// var app = []
// var ust = []

// const input = document.getElementById('searchAppareils')
// const list = document.getElementById('listIngredients')

// function filterApp (){

//     if (input.value.length > 2) {
//         const taping = input.value.toLowerCase();

//     displayAppareils(true, app)

//     const filteredArray = removeDuplicateItemInArray(app)
//     const ingredientsToDisplay = []

//     filteredArray.forEach(appliance => {
//         if (appliance.toLowerCase().indexOf(taping) >= 0) {
//             ingredientsToDisplay.push(appliance)
//         }
//     })

//     list.innerHTML = ''
//     ingredientsToDisplay.forEach(appliance => {
//         list.innerHTML += `<li>${appliance}</li>`;
//     });

// } else {

//     // on récupère tous les ingrédients des recettes qui sont  uniquement en display = true
//     displayAppareilDataIfTrue(true, app)
// }
// }

// export { filterApp }

// export default function mySearchDropdown() {
//     var input, filter, ul, li, item, i, txtValue;
//     input = document.getElementById("searchDropdown");
//     filter = input.value.toUpperCase();
//     ul = document.getElementsByTagName("ul");
//     li = ul.getElementsByTagName("li");
  
//     for (i = 0; i < li.length; i++) {
//       item = li[i];
//       txtValue = item.textContent || item.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
// }


import { ingredients, appareils, ustensils } from "./recipe.js";

function mySearchFunction() {
  var item, i, txtValue;
  let input = document.getElementById("searchBar");
  let filter = input.value;
  let article = document.getElementsByTagName("article");
  let ulIng = document.getElementById("listIngredients");
  let liIng = ulIng.getElementsByTagName("li");
  let ulApp = document.getElementById("listAppareils");
  let liApp = ulApp.getElementsByTagName("li");
  let ulUst = document.getElementById("listUstensils");
  let liUst = ulUst.getElementsByTagName("li");

  for (i = 0; i < article.length; i++) {   
    item = article[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      article[i].style.display = "";
      // mySearchFunctionIngredients();
      // mySearchFunctionAppareils();
      // mySearchFunctionUstensils();
    } else {
      article[i].style.display = "none";
      // mySearchFunctionIngredients();
      // mySearchFunctionAppareils();
      // mySearchFunctionUstensils();
    }
  }
}


function mySearchFunctionIngredients() {
  let listIngredients = document.getElementById("listIngredients");
  listIngredients.innerHTML='';
  var input, filter;
  // console.log(listIngredients)
  input = document.getElementById("searchIngredients");
  // console.log(valueText.target.value)
  filter = input.value.toLowerCase();
  // if (valueText) {
  //   filter = valueText;
  // } else {
  //   filter = input.value.toLowerCase();
  // }
  var test = ingredients.map(ing => {
    if (ing.search(filter) != -1){
      let listItem = document.createElement('li');
      listItem.innerHTML = ing;
      listIngredients.appendChild(listItem)
    }
  } )
}

function mySearchFunctionAppareils() {
  let listAppareils = document.getElementById("listAppareils");
  listAppareils.innerHTML='';
  var input, filter;
  input = document.getElementById("searchAppareils");
  filter = input.value.toLowerCase();

  var test = appareils.map(app => {
    if (app.search(filter) != -1){
      let listItem = document.createElement('li');
      listItem.innerHTML = app;
      listAppareils.appendChild(listItem)
    }
  } )
}

function mySearchFunctionUstensils() {
  let listUstensils = document.getElementById("listUstensils");
  listUstensils.innerHTML='';
  var input, filter;
  input = document.getElementById("searchUstensils");
  filter = input.value.toLowerCase();

  var test = ustensils.map(ust => {
    if (ust.search(filter) != -1){
      let listItem = document.createElement('li');
      listItem.innerHTML = ust;
      listUstensils.appendChild(listItem)
    }
  } )
}


export {mySearchFunction, mySearchFunctionIngredients, mySearchFunctionAppareils, mySearchFunctionUstensils}