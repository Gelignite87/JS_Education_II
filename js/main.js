class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts(); //protected method, работает в классе и потомках
    this.#render(); //инкапсуляция, private method, работает только в классе
  }
  _fetchProducts() {
    fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses//catalogData.json')
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.goods = data
        this.#render() //инкапсуляция, private method, работает только в классе
      })
      .catch(error => {
        console.log(error);
      }) 
      }
  #render() {
    const block = document.querySelector(this.container);
    for (let prod of this.goods) {
      const classProductItem = new ProductItem(prod);
      block.insertAdjacentHTML('beforeend', classProductItem.render());
      this.allProducts.push(classProductItem);
    }
  }
  calcSum() {
    return this.goods.reduce((sum, { price = 0 }) => sum + price, 0);
  }
}

class ProductItem {
  constructor({ product_name, price = 0, id, img = 'https://via.placeholder.com/200x150?text=Your+product' }) {
    this.id = id;
    this.product_name = product_name;
    this.img = img;
    this.price = price;
  }
  render() {
    return `<div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} ₽</p>
                    <button class="buy-btn"
                    data-id="${this.id_product}"
                    data-name="${this.product_name}"
                    data-price="${this.price}">Купить</button>
                </div>
            </div>`;
  }
}

class Cart {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts(); //protected method, работает в классе и потомках
    }
  _fetchProducts() {
    fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json')
      .then(data => data.json())
      .then(data => {
        this.goods = data.contents
        this.#render() //инкапсуляция, private method, работает только в классе
      })
      .catch(error => {
        console.log(error);
      }) 
      }
  #render() {
    const block = document.querySelector(this.container);
    for (let prod of this.goods) {
      const classCartItem = new CartItem(prod);
      block.insertAdjacentHTML('beforeend', classCartItem.render());
      this.allProducts.push(classCartItem);
    }
  }
  calcSum() {
    return this.goods.reduce((sum, { price = 0 }) => sum + price, 0);
  }
}

class CartItem {
  constructor({ product_name, price = 0, id, img = 'https://via.placeholder.com/200x150?text=Your+product' }) {
    this.id = id;
    this.product_name = product_name;
    this.img = img;
    this.price = price;
  }

  render() {
    return `<div class="cart-item" data-id="${this.id_product}">
            <div class="product-bio">
            <img src="${this.img}" alt="Some image">
            <div class="product-desc">
            <p class="product-title">${this.product_name}</p>
            <p class="product-quantity">Количество: ${this.quantity}</p>
        <p class="product-single-price">${this.price} за ед.</p>
        </div>
        </div>
        <div class="right-block">
            <p class="product-price">${this.price} ₽</p>
            <button class="del-btn" data-id="${this.id_product}">&times;</button>
        </div>
        </div>`
  }
}

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
let classProductList = new ProductList('.products');
let classCart = new Cart('.btn-cart');

console.log(classProductList.calcSum());