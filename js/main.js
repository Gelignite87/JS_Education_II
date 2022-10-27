class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts(); //protected method, работает в классе и потомках
    this.#render(); //инкапсуляция, private method, работает только в классе
  }
  _fetchProducts() {
    this.goods = [
      { id: 1, title: 'Notebook', img: './images/Notebook.png', price: 20000 },
      { id: 2, title: 'Mouse', img: './images/Mouse.png', price: 2500 },
      { id: 3, title: 'Keyboard', img: './images/Keyboard.png', price: 5000 },
      { id: 4, title: 'Gamepad', img: './images/Gamepad.png', price: 4500 },
      { id: 5, title: 'Microphone' },
    ];
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
  constructor({ title, price = 0, id, img = 'https://via.placeholder.com/200x150?text=Your+product' }) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.price = price;
  }
  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

class CartItem {
  constructor({ title, price = 0, id, img = 'https://via.placeholder.com/200x150?text=Your+product' }) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.price = price;
  }
  addProduct(product) { }
  removeProduct(product) { }
  render() { }
}

let classProductList = new ProductList('.products');

console.log(classProductList.calcSum());