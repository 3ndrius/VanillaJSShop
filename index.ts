

const cartMenuWrapper = document.querySelector('.shop-cart');
const cartMenuBtn = document.querySelector('.cart-button');
const cartMenu = document.querySelector('.shop-cart__container');

const closeBtn = document.querySelector('.close');

cartMenuBtn.addEventListener('click', ()=> {
    cartMenuWrapper.style.display = 'flex';
    cartMenu.style.transform = "translateX(0%)"
    document.body.style.overflow = "hidden";
})

closeBtn.addEventListener('click', () =>{
    cartMenuWrapper.style.display = 'none';
    cartMenu.style.transform = "translateX(101%)"
    document.body.style.overflowY = "scroll";
})


let cart = [];

class Products {
    
   getProducts() {
        
           let result = require('./products.json');
           console.log(result);
            return result;
       
         
       
    }
}

let product = new Products;

product.getProducts();