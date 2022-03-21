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