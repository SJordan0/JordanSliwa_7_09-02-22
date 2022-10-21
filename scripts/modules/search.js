import { recettes, ingredients, appareils, ustensils, recTags } from "./array.js";
import { recipes } from "../../data/recipes.js";
import { getRecipeData } from "./display.js";

function initSearch() {
  let input = document.getElementById("searchBar");

  let filter = input.value.toLowerCase();
  let recipesSection = document.querySelector("#recipesSection")
  console.log(filter)

  if(filter.length > 2) {
    mySearchFunction();
  } else if (filter.length == 0) {
    recipesSection.innerHTML='';
    recettes.splice(0, recettes.length);
    getRecipeData(recipes);
    mySearchFunctionIngredients(ingredients)
    mySearchFunctionAppareils(appareils)
    mySearchFunctionUstensils(ustensils)
  }
}

function mySearchFunction(listTag) {
  let recipesSection = document.querySelector("#recipesSection")
  recipesSection.innerHTML='';
  let ingFiltered = [];
  let appFiltered = [];
  let ustFiltered = [];
  let recFiltered = [];
 
  let input = document.getElementById("searchBar");

  let filter = input.value.toLowerCase();
  if (listTag && listTag.length == 1){
    recTags.length = 0;
    listTag.map(tag =>{
      var test = recettes.map(rec => {
        if (rec.search(tag.toLowerCase()) != -1){
          let listItem = document.createElement('article');
          listItem.innerHTML = rec;
          recipesSection.appendChild(listItem)

          let recipe = document.querySelector("#recipesSection")
          let info = recipe.querySelectorAll('.info').forEach(e => {
            if(recFiltered.filter(elt => elt == e).length == 0) {
            let liste = e.querySelector('.recipe_ing')
            let listIng = liste.innerText;
            const ingred = listIng.split('\n');
            ingred.map(ing => {
                let test = ing.split(':');
                if(ingFiltered.filter(elt => elt == test[0]).length == 0) {
                  ingFiltered.push(test[0])
                }
            })
            let appareil = e.querySelector('.recipe_app')
            const app = appareil.innerText;
            if(appFiltered.filter(elt => elt == app).length == 0) {
            appFiltered.push(app)
            }
            
            let listUst = e.querySelector('.recipe_ust')
            const ustensil = listUst.innerText;
            const usten = ustensil.split('\n');
            usten.map(ust => {
              if(ustFiltered.filter(elt => elt == ust).length == 0) {
                ustFiltered.push(ust)
                }
            })
            recFiltered.push(e);
            recTags.push(rec)
            console.log(recFiltered)
            console.log(recTags)
          }
        })
        }
      } )
    } )
    
  } else if (listTag && listTag.length > 1) {

    listTag.slice(-1).map(tag =>{
      console.log(tag)
      var test = recTags.map(rec => {
        if (rec.search(tag.toLowerCase()) != -1){
          let listItem = document.createElement('article');
          listItem.innerHTML = rec;
          recipesSection.appendChild(listItem)

          let recipe = document.querySelector("#recipesSection")
          let info = recipe.querySelectorAll('.info').forEach(e => {
            if(recFiltered.filter(elt => elt == e).length == 0) {
            let liste = e.querySelector('.recipe_ing')
            let listIng = liste.innerText;
            const ingred = listIng.split('\n');
            ingred.map(ing => {
                let test = ing.split(':');
                if(ingFiltered.filter(elt => elt == test[0]).length == 0) {
                  ingFiltered.push(test[0])
                }
            })
            let appareil = e.querySelector('.recipe_app')
            const app = appareil.innerText;
            if(appFiltered.filter(elt => elt == app).length == 0) {
            appFiltered.push(app)
            }
            
            let listUst = e.querySelector('.recipe_ust')
            const ustensil = listUst.innerText;
            const usten = ustensil.split('\n');
            usten.map(ust => {
              if(ustFiltered.filter(elt => elt == ust).length == 0) {
                ustFiltered.push(ust)
                }
            })
            recFiltered.push(e);
            console.log(recFiltered)
            console.log(recTags)
            console.log(listTag)
          }
        })
        }
      } )
    } )

  } else {
  var test = recettes.map(rec => {
    if (rec.search(filter) != -1){
      let listItem = document.createElement('article');
      listItem.innerHTML = rec;
      recipesSection.appendChild(listItem)

      let recipe = document.querySelector("#recipesSection")
      let info = recipe.querySelectorAll('.info').forEach(e => {
        if(recFiltered.filter(elt => elt == e).length == 0) {
        let liste = e.querySelector('.recipe_ing')
        let listIng = liste.innerText;
        const ingred = listIng.split('\n');
        ingred.map(ing => {
          let test = ing.split(':');
          if(ingFiltered.filter(elt => elt == test[0]).length == 0) {
            ingFiltered.push(test[0])
          }
      })

      let appareil = e.querySelector('.recipe_app')
      const app = appareil.innerText;
      if(appFiltered.filter(elt => elt == app).length == 0) {
        appFiltered.push(app)
        }

      let listUst = e.querySelector('.recipe_ust')
      const ustensil = listUst.innerText;
      const usten = ustensil.split('\n');
      usten.map(ust => {
        if(ustFiltered.filter(elt => elt == ust).length == 0) {
        ustFiltered.push(ust)
        }
      })
      recFiltered.push(e);
    }
    })
    }
  } )
}
  mySearchFunctionIngredients(ingFiltered)
  mySearchFunctionAppareils(appFiltered)
  mySearchFunctionUstensils(ustFiltered)
}


function mySearchFunctionIngredients(ingFiltered) {
  let listIngredients = document.getElementById("listIngredients");
  listIngredients.innerHTML='';
  var input, filter;
  input = document.getElementById("searchIngredients");
  filter = input.value.toLowerCase();

  if(ingFiltered.length > 0) {
      ingFiltered.map(ing => {
          let listItem = document.createElement('li');
          listItem.classList.add('ingredient')
          listItem.innerHTML = ing;
          listIngredients.appendChild(listItem)
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
    appFiltered.map(app => {
          let listItem = document.createElement('li');
          listItem.innerHTML = app;
          listAppareils.appendChild(listItem)
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
    ustFiltered.map(ust => {
          let listItem = document.createElement('li');
          listItem.innerHTML = ust;
          listUstensils.appendChild(listItem)
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



export { initSearch ,mySearchFunction, mySearchFunctionIngredients, mySearchFunctionAppareils, mySearchFunctionUstensils}