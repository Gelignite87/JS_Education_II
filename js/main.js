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
  // priceAllProduct() {
  //   let priceAllProduct = 0;
  //   const block = document.querySelector(this.container);
  //   for (let product of this.allProducts) {
  //     const { id, title, img, price } = product;
  //     priceAllProduct += price;
  //   }
  //   block.insertAdjacentHTML('afterend', `<p style="font-size: 25px; padding-left: 40px;">Суммарная стоимость товаров: ${priceAllProduct} \u20bd</p>`);
  // }
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

/**-------------------------------------------------------*/
class Basket {
  constructor(X) {
    this.allProducts = [];
  }
  render() {
  }
}

class BasketElements {
  constructor({ title = 'name', price = 0, id = 0 }) {
    this.title = title;
    this.price = price;
    this.id = id;
  }
  render() {
  }
}
/**-------------------------------------------------------*/

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button> 
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
//
