let card_list = document.querySelector('.items .row')




async function getProducts() {
    let response = await fetch("store_db.json")
    let products = await response.json()
    return products
   };

function getCardHTML(item){
    return `
<div class="row">
    <div class="col-lg-4">  
        <img src="img/${item.image}" alt=""> 
        <p class="text-card">${item.title}</p>
        <p class="card-description">${item.description}</p>
        <p class="price">${item.price}</p>
    </div>    
`


}



getProducts().then(function(products){
    products.forEach(function(product){
        card_list.innerHTML += getCardHTML(product)
    });
})
