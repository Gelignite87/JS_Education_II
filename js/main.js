class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];

    this.fetchProducts();
    this.render();
    // this.priceAllProduct();
  }
  fetchProducts() {
    this.goods = [
      { id: 1, title: 'Notebook', img: './images/Notebook.png', price: 20000 },
      { id: 2, title: 'Mouse', img: './images/Mouse.png', price: 2500 },
      { id: 3, title: 'Keyboard', img: './images/Keyboard.png', price: 5000 },
      { id: 4, title: 'Gamepad', img: './images/Gamepad.png', price: 4500 },
      { id: 5, title: 'Microphone' },
    ];
  }
  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor({ title, price = 0, id, img = 'https://via.placeholder.com/200x150?text=Your+product' }) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.img = img;
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

new ProductList();