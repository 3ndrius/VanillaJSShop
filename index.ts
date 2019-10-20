const cartMenuWrapper = document.querySelector('.shop-cart');
const cartMenuBtn = document.querySelector('.cart-button');
const cartMenu = document.querySelector('.shop-cart__container');
const closeBtn = document.querySelector('.close');
const productsDom = document.querySelector('.products__container')
const headerTotal = document.querySelector('.header-count');
const totalPrice = document.querySelector('.total-price');
const menuCartList = document.querySelector('.shop-cart__list');
const clearCartBtn = document.querySelector('.btn--total');

cartMenuBtn.addEventListener('click', () => {
    cartMenuWrapper.style.display = 'flex';
    cartMenu.style.transform = "translateX(0%)"
    document.body.style.overflow = "hidden";
})

closeBtn.addEventListener('click', () => {
    cartMenuWrapper.style.display = 'none';
    cartMenu.style.transform = "translateX(101%)"
    document.body.style.overflowY = "scroll";
})


let cart = [];

class Products {

    async getProducts() {
        try {
            let result = await require('./products.json');
            let data = result.items;
            data = data.map(item => {
                const {
                    title,
                    price
                } = item.fields;
                const {
                    id
                } = item.sys;
                const image = item.fields.image.fields.file.url;
                return {
                    title,
                    price,
                    id,
                    image
                };
            })
            return data;
        } catch (err) {
            console.log(err);
        }

    }
}
class UI {

    showProducts(data) {
        let resultItem = " ";

        data.forEach(item => {
            resultItem += `
        <article class="products__item">
            <div class="products__image">
                <img src=${item.image} alt="products-image">
                <button class="buy-btn" data-id=${item.id}> Add to cart</button>
            </div>
            <div class="products__title">
                <h2>${item.title}</h2>
            </div>
            <div class="products__price">
                ${item.price}
            </div>
        </article>
        `;

        })
        productsDom.innerHTML = resultItem;
    }
    getButtons() {
        const buttonsBuy = [...document.querySelectorAll(".buy-btn")]

        buttonsBuy.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                button.innerHTML = " In cart"
                button.disabled = true;
            }
            button.addEventListener('click', (e) => {
                e.target.disabled = true;
                e.target.innerHTML = " In cart"
                console.log(e.target);
                let cartItem = {
                    ...Storage.getFromStorage(id),
                    amount: 1
                };
                cart = [...cart, cartItem];

                Storage.saveCart(cart);

                this.setCartTotal(cart)

                this.addToCart(cartItem);
            })
        })
    }
    setCartTotal(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        })
        totalPrice.innerText = parseFloat(tempTotal.toFixed(2));
        headerTotal.innerText = itemsTotal;
    }
    addToCart(item) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
        <img src=${item.image} alt="small-img">
        <div class="wrap">
            <h4>${item.title}</h4>
            <h5>$${item.price}</h5>
            <p class="remove" data-id=${item.id}>remove</p>
        </div>
        <div class="count" >
            <i class="fa fa-angle-up" aria-hidden="true" data-id=${item.id}></i>
            <p class="item-amount" >${item.amount}</p>
            <i class="fa fa-angle-down" aria-hidden="true" data-id=${item.id} ></i>
        </div>
        `
        menuCartList.appendChild(listItem);
    }
    setupApp() {
        cart = Storage.getCart();
        this.setCartTotal(cart);
        this.populateCart(cart);
    }
    populateCart(cart) {
        cart.forEach(item => this.addToCart(item));
    }
    cartLogic() {
        clearCartBtn.addEventListener('click', () => {
            this.clearCart();
        })
        
         menuCartList.addEventListener('click', e => {
          
            if(e.target.classList.contains('remove')) {
                let removesItem = e.target;
                let id = removesItem.dataset.id;
                this.removeItem(id);
                menuCartList.removeChild(e.target.parentElement.parentElement)
            }
            else if( e.target.classList.contains('fa-angle-up')){
                let id = e.target.dataset.id;
              let tempAmount = cart.find(item=> item.id === id)
                tempAmount.amount = tempAmount.amount + 1;
               Storage.saveCart(cart);
               this.setCartTotal(cart);
               e.target.nextElementSibling.innerText = tempAmount.amount 
               
            }
            else if( e.target.classList.contains('fa-angle-down')){
                let id = e.target.dataset.id;
                let lowerAmount = cart.find(item=> item.id === id)
                lowerAmount.amount = lowerAmount.amount - 1;

                if(lowerAmount.amount > 0 ) {
                    Storage.saveCart(cart);
                    this.setCartTotal(cart);
                    e.target.previousElementSibling.innerText = lowerAmount.amount 
                }
                else{
                    this.removeItem(id);
                    menuCartList.removeChild(e.target.parentElement.parentElement)
                }

            }
         })
    }
    clearCart() {
        let cartIds = cart.map(item => item.id)
        cartIds.forEach(id => this.removeItem(id));
        while (menuCartList.children.length > 0) {
            menuCartList.removeChild(menuCartList.children[0])
        }
    }
    removeItem(id) {
        cart = cart.filter(item => item.id !== id);
        this.setCartTotal(cart);
        Storage.saveCart(cart);
        let btn = this.getSingleBtn(id);
        btn.disabled = false;
        btn.innerHTML = ` Add to cart`;
    }
    getSingleBtn(id) {
        return [...document.querySelectorAll(".buy-btn")].find(button => button.dataset.id === id)
    }

}
class Storage {

    static saveToStorage(data) {
        localStorage.setItem("products", JSON.stringify(data))
    }
    static getFromStorage(id) {
        let product = JSON.parse(localStorage.getItem("products"));
        return product.find(item => item.id === id)
    }
    static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("save");
    }
    static getCart() {
        return localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
    }
    
}
document.addEventListener('DOMContentLoaded', () => {

    let products = new Products;
    let layout = new UI;
    layout.setupApp();
    products.getProducts().then(product => {
            layout.showProducts(product)
            Storage.saveToStorage(product);
        })
        .then(() => {
            layout.getButtons();
        })
    layout.cartLogic();

})