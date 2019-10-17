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
       let resultItem= " ";

       data.forEach(item => {
        resultItem += `
        <article class="products__item">
        <div class="products__image">
            <img src=${item.image} alt="products-image">
            <i class="fa fa-shopping-cart fa-lg" data-id=${item.id} aria-hidden="true"></i>
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

}
class Storage {

}
document.addEventListener('DOMContentLoaded', () => {

    let products = new Products;
    let layout = new UI;
    products.getProducts().then(product => {
        layout.showProducts(product)
    })
  
})