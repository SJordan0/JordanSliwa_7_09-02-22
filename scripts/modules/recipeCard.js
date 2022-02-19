//___DOM___//
let recipesSection = document.querySelector(".recipes_section");

//___Création d'un profil___//
function createAcard(recipe) {
  let article = document.createElement( 'article' );
  let img = document.createElement( 'img' );
  let Infos = document.createElement ( 'div' );
  let Name = document.createElement( 'h2' );
  let Ingredients = document.createElement( 'ul' );
  let Time = document.createElement( 'span' );
  let Description = document.createElement( 'p' );

  //___Contenu du profil___//
  let Ingredient = recipe.ingredients;
      for (let ingredient of Ingredient) {
        let listItem = document.createElement('li');
        if(!ingredient.quantity && !ingredient.unit){
          listItem.innerHTML = `${ingredient.ingredient}`
        } else if (ingredient.quantity && !ingredient.unit){
        listItem.innerHTML = `${ingredient.ingredient} : ${ingredient.quantity}`
        } else {
          listItem.innerHTML = `${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit}`
        }
        Ingredients.appendChild(listItem);
      }


  Infos.classList.add('info')
  Name.innerHTML = `${recipe.name}`
  Time.innerHTML = `<i class="fa-regular fa-clock"></i> ${recipe.time} min`
  Description.innerHTML = `${recipe.description}`
  article.setAttribute('id', `article${recipe.id}`)

  article.appendChild(img)
  Infos.appendChild(Name)
  Infos.appendChild(Time)
  Infos.appendChild(Ingredients)
  Infos.appendChild(Description)
  article.appendChild(Infos)
  recipesSection.appendChild(article)
}

export { createAcard }