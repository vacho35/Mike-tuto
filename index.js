let produits = ["Iphone", "Ipad", "MacBook Pro", "MacBook Air", "Iwatch", "MacPro", "Ipad Pro", "tv"];
const tableauProduits = [];
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let lis = document.querySelectorAll("li");


function initArrayProduct () {
    for (let i = 0; i < produits.length; i++) {
        tableauProduits.push(produits[i])  ;
        console.log(tableauProduits);
    }
}

function resetMenu () {
    for (let index = 0; index < lis.length; index++) {
        const liSelection = lis[index];
      console.log(liSelection);  
    }
}

resetMenu 
    
    