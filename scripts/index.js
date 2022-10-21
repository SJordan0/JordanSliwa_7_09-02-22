import { recipes } from '../data/recipes.js'
import { getRecipeData } from './modules/display.js'
import { openList1, closeList1, openList2, closeList2, openList3, closeList3, closeList } from "./modules/dropdown.js";
import { initSearch, mySearchFunctionIngredients, mySearchFunctionAppareils, mySearchFunctionUstensils } from './modules/search.js';
import { CreateTag, RemoveTag } from './modules/tags.js';

let listTags = document.getElementById('mini-tags')
let searchBar = document.getElementById("searchBar")
let searchIngredients = document.getElementById('searchIngredients')
let searchAppareils = document.getElementById('searchAppareils')
let searchUstensils = document.getElementById('searchUstensils')

let open1 = document.querySelector('.ingredients')
let close1 = document.querySelector('#iconClose1')
let open2 = document.querySelector('.appareils')
let close2 = document.querySelector('#iconClose2')
let open3 = document.querySelector('.ustensiles')
let close3 = document.querySelector('#iconClose3')
let closeAll = document.querySelector('.filters')

//__Récupération et affichage des données des recettes___//
getRecipeData(recipes);

searchBar.addEventListener('keyup', initSearch)
searchIngredients.addEventListener('keyup', mySearchFunctionIngredients)
searchAppareils.addEventListener('keyup', mySearchFunctionAppareils)
searchUstensils.addEventListener('keyup', mySearchFunctionUstensils)

searchIngredients.addEventListener('click', CreateTag)
searchAppareils.addEventListener('click', CreateTag)
searchUstensils.addEventListener('click', CreateTag)

listTags.addEventListener('click', RemoveTag)




open1.addEventListener('click', () => openList1())
close1.addEventListener('click', () => closeList1())
open2.addEventListener('click', () => openList2())
close2.addEventListener('click', () => closeList2())
open3.addEventListener('click', () => openList3())
close3.addEventListener('click', () => closeList3())
closeAll.addEventListener('mouseup', () => closeList())