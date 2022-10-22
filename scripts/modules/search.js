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
      for(let t = 0; t < listTag.length; t++) {
      for (let i = 0; i < recettes.length; i++) {
        if (recettes[i].search(listTag[t].toLowerCase()) != -1) {
          let listItem = document.createElement('article');
          listItem.innerHTML = recettes[i];
          recipesSection.appendChild(listItem)

          let recipe = document.querySelector("#recipesSection")
          let info = recipe.querySelectorAll('.info')
          for (var j = 0; j < info.length; j++) {
          if(recFiltered.includes(info[j]) == false) {
            let liste = info[j].querySelector('.recipe_ing')
            let listIng = liste.innerText;
            const ingred = listIng.split('\n');
            for(var v = 0; v < ingred.length; v++){
              let test = ingred[v].split(':');
              const value = test[0];
              if(ingFiltered.includes(value) == false) {
              ingFiltered.push(value);
              }
            }

          let appareil = info[j].querySelector('.recipe_app')
          const app = appareil.innerText;
          if(appFiltered.includes(app) == false) {
            appFiltered.push(app);
            }

          let listUst = info[j].querySelector('.recipe_ust')
          const ustensil = listUst.innerText;
          const usten = ustensil.split('\n');
          for(var u = 0; u < usten.length; u++){
            const value = usten[u];
            if(ustFiltered.includes(value) == false) {
              ustFiltered.push(value);
              }
            }
          recFiltered.push(info[j]);
          recTags.push(recettes[i])
          console.log(recFiltered)
          console.log(recTags)
        }
      }
      }
      }
    } 
    
  } else if (listTag && listTag.length > 1) {

    let newList = listTag.slice(-1);
      for(let t = 0; t < newList.length; t++) {
        for (let i = 0; i < recTags.length; i++) {
          if (recTags[i].search(newList[t].toLowerCase()) != -1) {
          let listItem = document.createElement('article');
          listItem.innerHTML = recTags[i];
          recipesSection.appendChild(listItem)

          let recipe = document.querySelector("#recipesSection")
          let info = recipe.querySelectorAll('.info')
          for (var j = 0; j < info.length; j++) {
          if(recFiltered.includes(info[j]) == false) {
            let liste = info[j].querySelector('.recipe_ing')
            let listIng = liste.innerText;
            const ingred = listIng.split('\n');
            for(var v = 0; v < ingred.length; v++){
              let test = ingred[v].split(':');
              const value = test[0];
              if(ingFiltered.includes(value) == false) {
              ingFiltered.push(value);
              }
            }

          let appareil = info[j].querySelector('.recipe_app')
          const app = appareil.innerText;
          if(appFiltered.includes(app) == false) {
            appFiltered.push(app);
            }

          let listUst = info[j].querySelector('.recipe_ust')
          const ustensil = listUst.innerText;
          const usten = ustensil.split('\n');
          for(var u = 0; u < usten.length; u++){
            const value = usten[u];
            if(ustFiltered.includes(value) == false) {
              ustFiltered.push(value);
              }
            }
          recFiltered.push(info[j]);
          console.log(recFiltered)
          console.log(recTags)
          console.log(listTag)
        }
      }
      }
      }
    } 

  } else {

  for (let i = 0; i < recettes.length; i++) {
    if (recettes[i].search(filter) != -1) {
      let listItem = document.createElement('article');
      listItem.innerHTML = recettes[i];
      recipesSection.appendChild(listItem)

      let recipe = document.querySelector("#recipesSection")
      let info = recipe.querySelectorAll('.info')
      for (var j = 0; j < info.length; j++) {
        if(recFiltered.includes(info[j]) == false) {
        let liste = info[j].querySelector('.recipe_ing')
        let listIng = liste.innerText;
        const ingred = listIng.split('\n');
        for(var v = 0; v < ingred.length; v++){
          let test = ingred[v].split(':');
          const value = test[0];
          if(ingFiltered.includes(value) == false) {
          ingFiltered.push(value);
          }
        }

      let appareil = info[j].querySelector('.recipe_app')
      const app = appareil.innerText;
      if(appFiltered.includes(app) == false) {
        appFiltered.push(app);
        }

      let listUst = info[j].querySelector('.recipe_ust')
      const ustensil = listUst.innerText;
      const usten = ustensil.split('\n');
      for(var u = 0; u < usten.length; u++){
        const value = usten[u];
        if(ustFiltered.includes(value) == false) {
          ustFiltered.push(value);
          }
        }
      recFiltered.push(info[j]);
      }
    }
    }
    }
    if(recipesSection.childNodes.length === 0) {
      recipesSection.innerHTML = '<h2>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson »</h2>'
    }
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


export { initSearch, mySearchFunction, mySearchFunctionIngredients, mySearchFunctionAppareils, mySearchFunctionUstensils}