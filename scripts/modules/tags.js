import { mySearchFunction } from "./search.js";

const listTag = [];

function CreateTag() {
  let space = document.getElementById('mini-tags');

  var listIngredients = document.querySelector('#listIngredients');
  var listIng = listIngredients.querySelectorAll('li').forEach(e => {
    e.addEventListener('click', () => {
      let item = document.createElement('span');
      item.innerHTML = e.innerText + "<button><i class='far fa-times-circle'></i></button>";
      item.classList.add('ingredients','tags')
      if(listTag.filter(elt => elt == e.innerText).length == 0) {
        listTag.push(item.innerText)
        space.appendChild(item);
        mySearchFunction(listTag)
        console.log(listTag)
      }
  })
  })

  var listAppareils = document.querySelector('#listAppareils');
  var listApp = listAppareils.querySelectorAll('li').forEach(e => {
    e.addEventListener('click', () => {
      let item = document.createElement('span');
      item.innerHTML = e.innerText + "<button><i class='far fa-times-circle'></i></button>";
      item.classList.add('appareils','tags')
      if(listTag.filter(elt => elt == e.innerText).length == 0) {
        listTag.push(item.innerText)
        space.appendChild(item);
        mySearchFunction(listTag)
        console.log(listTag)
      }
  })
  })

  var listUstensils = document.querySelector('#listUstensils');
  var listUst = listUstensils.querySelectorAll('li').forEach(e => {
    e.addEventListener('click', () => {
      let item = document.createElement('span');
      item.innerHTML = e.innerText + "<button><i class='far fa-times-circle'></i></button>";
      item.classList.add('ustensiles','tags')
      if(listTag.filter(elt => elt == e.innerText).length == 0) {
        listTag.push(item.innerText)
        space.appendChild(item);
        mySearchFunction(listTag)
        console.log(listTag)
      }
  })
  })
};

function RemoveTag() {
    let space = document.querySelector('#mini-tags');
    space.addEventListener('click', () => {
        let span = space.querySelectorAll('span').forEach(e =>{
            e.addEventListener('click', () => {
                e.remove();
                listTag.splice(e);
                mySearchFunction(listTag)
            })
        })
    })

}

export { CreateTag, RemoveTag }