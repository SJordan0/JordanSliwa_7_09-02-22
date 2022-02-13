import { getRecipes } from '../index.js'

//___Récupération des données___//
function myFetch(){
    let source = './data/recipes.json'
    fetch(source).then(async (res) => {
        if (res.ok) {
            const json = await res.json()
            getRecipes(json)
        } else {
            console.log('erreur')
        }
    })
}

export { myFetch }