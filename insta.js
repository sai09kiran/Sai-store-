
let maxlist = 4

let cards= document.querySelector(".cards")

const getProcuts = () =>{

    fetch("https://fakestoreapi.com/products")

.then((response) =>{
    return response.json()
})
.then((data) => {
    let cards= document.querySelector(".cards")
    cards.innerHTML = ""
    return data
})

.then((data) =>{
   
    for(let i=0;i<maxlist;i++){
        let card =document.createElement("div");

        cards.appendChild(card)
        card.classList.add("card")

  let image =document .createElement("img")

 image.src =data[i].image
 image.classList.add("product_image")

 card.appendChild(image);
 

 let heading =document.createElement("h2")
 heading.innerHTML =data[i].title;

card.appendChild(heading);

let dataDesription =document.createElement("p")
dataDesription.innerHTML =data[i].description;

card.appendChild(dataDesription);

let productprice = document.createElement("p")
productprice.innerHTML = `price : ${data[i].price}`

card.appendChild(productprice);

    }
})



let btn = document.getElementById("btn");
btn.addEventListener("click",() =>{
 maxlist = maxlist + 4;
 getProcuts()
})

}

getProcuts()

