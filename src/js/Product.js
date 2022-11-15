const product = {
    props: ['product'],
    data() {
        return {};
    },
    methods: {},
    mounted(){
        this.addProduct = this.$root.$refs.filling.$refs.navigation.$refs.cartInNavigation.addProduct
    },
    template: `<div class="block_product">
    <a class="a-flex" href="product.html" @click.prevent="$root.updateState('targetproduct')">
        <div v-bind:style="{ backgroundImage: 'url(https://via.placeholder.com/200x200)', backgroundSize: 'cover'}" class="img_block">
            <img class="img img_block_product" :src=product.img alt="Product1">
        </div>                       
        <div class="block_text_product">
            <div style="margin: 10px 0 0 0;" class="block_text_product1">{{product.product_name}}</div>
            <div class="block_text_product2">Known for her sculptural takes on traditional
                                    tailoring,
                                    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</div>
            <div class="block_text_product3">{{product.price}}₽</div>
        </div>
    </a>
    <div class="wrapper_add_to_cart">
        <a class="add_to_cart" href="#" @click.prevent="addProduct(product)">
            <i class="fa-solid fa-cart-shopping"></i>
            <p class="add_to_cart_text">Add to Cart</p>
        </a>
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
        this.$root.getJson(`${this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
    },
    template: `
        <div class="product alignment">
            <div class="greed12"></div>
            <product ref="product" v-for="item of filtered" :key="item.id_product" :product="item"></product>
        </div>
    `
}