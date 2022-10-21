import { mySearchFunction } from "./search.js";
import { listTag } from "./array.js";


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
      }
  })
  })
};

function RemoveTag() {
    let space = document.querySelector('#mini-tags');
        let span = space.querySelectorAll('span').forEach(e =>{
            e.addEventListener('click', () => {
              let test = e.innerText;
              console.log(test)
                e.remove();
                let NewList = listTag.filter(elt => elt != test)
                listTag.length = 0;
                listTag.push.apply(listTag, NewList)
                console.log(listTag)
                console.log(NewList)
                mySearchFunction(listTag)
            })
        })

}

export { CreateTag, RemoveTag }