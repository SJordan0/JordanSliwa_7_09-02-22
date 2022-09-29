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


import { recettes, ingredients, appareils, ustensils } from "./recipe.js";

function mySearchFunction() {
  let recipesSection = document.querySelector("#recipesSection")
  recipesSection.innerHTML='';
  let ingFiltered = [];
  let appFiltered = [];
  let ustFiltered = [];
  
  let input = document.getElementById("searchBar");

  let filter = input.value.toLowerCase();
  var test = recettes.map(rec => {
    if (rec.search(filter) != -1){
      let listItem = document.createElement('article');
      listItem.innerHTML = rec;
      recipesSection.appendChild(listItem)

      let recipe = document.querySelector("#recipesSection")
      let info = recipe.querySelector('.info')
      let liste = info.querySelector('.recipe_ing')
      let listIng = liste.innerText;
      const ingred = listIng.split('\n');
      ingred.map(ing => {
        let test = ing.split(':');
        ingFiltered.push(test[0])
      })

      let appareil = info.querySelector('.recipe_app')
      const app = appareil.innerText;
      appFiltered.push(app)
      
      let listUst = info.querySelector('.recipe_ust')
      const ustensil = listUst.innerText;

      const usten = ustensil.split('\n');
      usten.map(ust => {
        ustFiltered.push(ust)
      })
      
      // ustFiltered.push(ustensil)
      // console.log(ustFiltered)
    }
  } )

  console.log(ingFiltered)
  mySearchFunctionIngredients(ingFiltered)
  mySearchFunctionAppareils(appFiltered)
  mySearchFunctionUstensils(ustFiltered)

  // for (i = 0; i < article.length; i++) {   
  //   item = article[i];
  //   txtValue = item.textContent || item.innerText;
  //   if (txtValue.indexOf(filter) > -1) {
  //     article[i].style.display = "";
  //     // mySearchFunctionIngredients();
  //     // mySearchFunctionAppareils();
  //     // mySearchFunctionUstensils();
  //   } else {
  //     article[i].style.display = "none";
  //     // mySearchFunctionIngredients();
  //     // mySearchFunctionAppareils();
  //     // mySearchFunctionUstensils();
  //   }
  // }
}


function mySearchFunctionIngredients(ingFiltered) {
  let listIngredients = document.getElementById("listIngredients");
  listIngredients.innerHTML='';
  var input, filter;
  input = document.getElementById("searchIngredients");
  filter = input.value.toLowerCase();

  if(ingFiltered.length > 0) {
    ingFiltered.map(data =>{
      var test = ingredients.map(ing => {
        if (ing.search(data) != -1){
          let listItem = document.createElement('li');
          listItem.innerHTML = ing;
          listIngredients.appendChild(listItem)
        }
      } )
    } )
  } else {

  var test = ingredients.map(ing => {
    if (ing.search(filter) != -1){
      let listItem = document.createElement('li');
      listItem.innerHTML = ing;
      listIngredients.appendChild(listItem)
    }
  } )
  }
}

function mySearchFunctionAppareils(appFiltered) {
  let listAppareils = document.getElementById("listAppareils");
  listAppareils.innerHTML='';
  var input, filter;
  input = document.getElementById("searchAppareils");
  filter = input.value.toLowerCase();

  if(appFiltered.length > 0) {
    appFiltered.map(data =>{
      var test = appareils.map(app => {
        if (app.search(data) != -1){
          let listItem = document.createElement('li');
          listItem.innerHTML = app;
          listAppareils.appendChild(listItem)
        }
      } )
    } )
  } else {

  var test = appareils.map(app => {
    if (app.search(filter) != -1){
      let listItem = document.createElement('li');
      listItem.innerHTML = app;
      listAppareils.appendChild(listItem)
    }
  } )
}
}

function mySearchFunctionUstensils(ustFiltered) {
  let listUstensils = document.getElementById("listUstensils");
  listUstensils.innerHTML='';
  var input, filter;
  input = document.getElementById("searchUstensils");
  filter = input.value.toLowerCase();

  if(ustFiltered.length > 0) {
    ustFiltered.map(data =>{
      var test = ustensils.map(ust => {
        if (ust.search(data) != -1){
          let listItem = document.createElement('li');
          listItem.innerHTML = ust;
          listUstensils.appendChild(listItem)
        }
      } )
    } )
  } else {

  var test = ustensils.map(ust => {
    if (ust.search(filter) != -1){
      let listItem = document.createElement('li');
      listItem.innerHTML = ust;
      listUstensils.appendChild(listItem)
    }
  } )
}
}


export {mySearchFunction, mySearchFunctionIngredients, mySearchFunctionAppareils, mySearchFunctionUstensils}