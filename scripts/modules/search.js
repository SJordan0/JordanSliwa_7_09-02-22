import { recettes, ingredients, appareils, ustensils } from "./recipe.js";

function mySearchFunction(listTag) {
  let recipesSection = document.querySelector("#recipesSection")
  recipesSection.innerHTML='';
  let ingFiltered = [];
  let appFiltered = [];
  let ustFiltered = [];
  let recFiltered = [];
 
  let input = document.getElementById("searchBar");

  let filter = input.value.toLowerCase();

  if (listTag.length > 0){
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
              if(ingFiltered.filter(elt => elt == ing).length == 0) {
                let test = ing.split(':');
                ingFiltered.push(test[0])
                console.log(ingFiltered)
              }
            })
            let appareil = e.querySelector('.recipe_app')
            const app = appareil.innerText;
            appFiltered.push(app)
            
            let listUst = e.querySelector('.recipe_ust')
            const ustensil = listUst.innerText;
  
            const usten = ustensil.split('\n');
            usten.map(ust => {
              ustFiltered.push(ust)
            })
            recFiltered.push(e);
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
        let liste = e.querySelector('.recipe_ing')
        let listIng = liste.innerText;
        const ingred = listIng.split('\n');
        ingred.map(ing => {
          if(ingFiltered.filter(elt => elt == ing).length == 0) {
            let test = ing.split(':');
            ingFiltered.push(test[0])
          }
        })



      let appareil = e.querySelector('.recipe_app')
      const app = appareil.innerText;
      appFiltered.push(app)
      
      let listUst = e.querySelector('.recipe_ust')
      const ustensil = listUst.innerText;

      const usten = ustensil.split('\n');
      usten.map(ust => {
        ustFiltered.push(ust)
      })
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
    ingFiltered.map(data =>{
      var test = ingredients.map(ing => {
        if (ing.search(data) != -1){
          let listItem = document.createElement('li');
          listItem.classList.add('ingredient')
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