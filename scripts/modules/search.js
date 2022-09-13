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

function mySearchFunction() {
  var item, i, txtValue;
  let input = document.getElementById("searchBar");
  let filter = input.value.toUpperCase();
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
      liIng[i].style.display = "";
      liApp[i].style.display = "";
      liUst[i].style.display = "";
    } else {
      article[i].style.display = "none";
      liIng[i].style.display = "none";
      liApp[i].style.display = "none";
      liUst[i].style.display = "none";
    }
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

export {mySearchFunction, mySearchFunctionIngredients, mySearchFunctionAppareils, mySearchFunctionUstensils}