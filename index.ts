const cartMenuWrapper = document.querySelector('.shop-cart');
const cartMenuBtn = document.querySelector('.cart-button');
const cartMenu = document.querySelector('.shop-cart__container');
const closeBtn = document.querySelector('.close');
const productsDom = document.querySelector('.products__container')



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
                <i class="fa fa-shopping-cart fa-lg" id="buy-btn"  data-id=${item.id} aria-hidden="true"> Add to cart</i>
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
        const buttonsBuy = [...document.querySelectorAll("#buy-btn")]
        
        buttonsBuy.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if(inCart) {
                button.innerHTML = " In cart"
                button.disabled = true;
            }
                button.addEventListener('click', (e)=> {
                    e.target.disabled = true;
                    button.innerHTML = " In cart"

                    let cartItem = { ...Storage.getFromStorage(id), amount: 1 };
                    cart = [...cart, cartItem];
                    console.log(cart);
                })
                
           
        })

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
}
document.addEventListener('DOMContentLoaded', () => {

    let products = new Products;
    let layout = new UI;
    products.getProducts().then(product => {
        layout.showProducts(product)
        Storage.saveToStorage(product);
    })
    .then(() => {
        layout.getButtons();
    })

})