const cartItem = {
    props: ['cartItem', 'img'],
    template: `
                <div class="cart-item">
                <div class="product-bio">
                    <div class="img_block img_block_height">
                        <img class="img" :src=this.$root.getImage(cartItem.img) alt="Some image">
                    </div>
                    <div class="product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
                        <p class="product-single-price">{{cartItem.price}}₽ за единицу</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">{{cartItem.quantity*cartItem.price}}₽</p>
                    <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                </div>
            </div>
    `
};

export const cart = {
    components: { cartItem },
    data() {
        return {
            imgCart: 'https://via.placeholder.com/50x100',
            cartItems: [],
            showCart: false,
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}?x=10&y=12&z=14`, { quantity: 1 })
                    .then((data) => {
                        console.log(data);
                        if (data.result === 1)
                            find.quantity = data.quantity;
                    }).catch(error => {
                        this.$parent.$refs.error.text = `Данные не удалены! Проверьте правильность адреса сервера! ${error}`
        });
            } else {
                let prod = Object.assign({ quantity: 1 }, product);
                this.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    })
            }
        },
        remove(item) {
            this.$parent.getJson('/api/cart')
                .then(data => {
                    if (data) {
                        if (item.quantity > 1) {
                            this.$parent.putJson(`/api/cart/${item.id_product}?x=10&y=12&z=14`, { quantity: -1 })
                                .then((data) => {
                                    console.log(data);
                                    if (data.result === 1)
                                        item.quantity = data.quantity;
                                })
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                            this.$parent.deleteJson(`/api/cart/${item.id_product}`, item);
                        }
                    }
                })
        },
        pushCartItems() {
            this.$parent.getJson('/api/cart')
                .then(data => {
                    for (let el of data.contents) {
                        this.cartItems.push(el);
                    }
                })
        }
    },
    mounted() {
        this.pushCartItems();
    },
    template: `
        <div>
            <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @remove="remove">
                </cart-item>
            </div>
        </div>`
};