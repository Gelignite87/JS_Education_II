const product = {
    props: ['product'],
    data() {
        return {};
    },
    methods: {},
    mounted(){
        this.addProduct = this.$root.$refs.cart.addProduct
    },
    template: `
    <div class="product-item">
                <div v-bind:style="{ backgroundImage: 'url(https://via.placeholder.com/200x200)', backgroundSize: 'cover'}" class="img_block">
                    <img class="img" :src=this.$root.getImage(product.img) alt="Some img">
                </div>
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}₽</p>
                    <button class="buy-btn" @click="addProduct(product)">Купить</button>
                </div>
            </div>`
};

export const products = {
    components: { product },
    data(){
        return {
            catalogUrl: '/api/products',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson(`${this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
    },
    template: `
        <div class="products">
            <product ref="refref" v-for="item of filtered" :key="item.id_product" :product="item"></product>
        </div>
    `
}
