// const testAppareils = () => {
// const searchBar = document.getElementById('searchAppareils');
// let appareils = [];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();


//     const filteredAppareils = appareils.filter( appliance => {
//         return appliance.toLowerCase().includes(searchString);
//     })
//     console.log(filteredAppareils)
//     displayAppareils(filteredAppareils)
// })
// }



// const searchBar = () => {
//     const searchbox = document.getElementsById("searchAppareils").value.toUpperCase();
//     const product = document.getElementById("listAppareils")
//     const pname = product.getElementsByTagName("li")

//     for(var i = 0; i < pname.length; i++) {
//         let match = product[i].getElementsByTagName('li')[0];

//         if(match) {
//             let textvalue = match.testContent || match.innerHTML

//             if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
//                 product[i].getElementsByClassName.display = "";
//             } else {
//                 product[i].getElementsByClassName.display = "none";
//             }
//         }
//     }
// }




// function searchRecipe() {
//   let input = document.getElementById('searchBar').value
//   input = input.toUpperCase();
//   let x = document.querySelector('.article');
    
//   for (i = 0; i < x.length; i++) { 
//       if (!x[i].innerHTML.toUpperCase().includes(input)) {
//           x[i].style.display="none";
//       }
//       else {
//           x[i].style.display="flex";                 
//       }
//   }
// }




// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('searchAppareils');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("listAppareils");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("li")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }

// var input, filter, ul, li, item, i, txtValue;
// // User Input
// input = document.getElementById("searchAppareils");
// // Filter, makes search not case sensitive
// filter = input.value.toUpperCase();
// // Grabs the parent element by id
// ul = document.getElementById("listAppareils");
// // Individual item on list
// li = ul.getElementsByTagName("li");

// // Treats lists items like an array, where each item can be accessed through      it's index
// for (i = 0; i < li.length; i++) {
//   item = li[i];
//  // Iterate over each list item to see if the value of the input, ignoring         case, matches the inner text or inner html of the item.
//   txtValue = item.textContent || item.innerText;
//   if (txtValue.toUpperCase().indexOf(filter) > -1) {
//   // Displays list items that are a match, and nothing if no match
//     li[i].style.display = "";
//   } else {
//     li[i].style.display = "none";
//   }
// }

