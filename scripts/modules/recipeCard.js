//___DOM___//
let recipesSection = document.querySelector(".recipes_section");

//___Création d'un profil___//
function createAcard(recipe) {
    let article = document.createElement( 'article' );
    let img = document.createElement( 'img' );
    let Infos = document.createElement ( 'div' );
    let Name = document.createElement( 'h2' );
    let Ingredients = document.createElement( 'ul' );
    let Ingredient = document.createElement( 'li' );
    let Time = document.createElement( 'span' );
    let Description = document.createElement( 'p' );
    article.appendChild(img)
    Ingredients.appendChild(Ingredient)
    article.appendChild(Infos)
    Infos.appendChild(Name)
    Infos.appendChild(Time)
    Infos.appendChild(Ingredients)
    Infos.appendChild(Description)
    article.appendChild(Infos)
    recipesSection.appendChild(article)

//___Contenu du profil___//
  Infos.classList.add('info')
  Name.innerHTML = `${recipe.name}`
  Ingredients.innerHTML = `${recipe.ingredients}`
  Ingredient.innerHTML = `${recipe.ingredients.ingredient}, ${recipe.ingredients.quantity}, ${recipe.ingredients.unit}`
  Time.innerHTML = `${recipe.time} min`
  Description.innerHTML = `${recipe.description}`
  article.setAttribute('id', `article${recipe.id}`)
}

export { createAcard }