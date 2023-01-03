const threeproduct = {
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

export const threeproducts = {
    components: { threeproduct },
    data() {
        return {
            filtered: [],
            onefiltered: [],
            threefiltered: []
        }
    },
    methods: {
        getRand() { 
            let rand = Math.floor(Math.abs((1 + Math.random() * 8)))
            let rand1 = Math.floor(Math.abs((1 + Math.random() * 8)))
            let rand2 = Math.floor(Math.abs((1 + Math.random() * 8)))
            if (rand == rand1 || rand1 == rand2 || rand == rand2) {
                this.getRand()
                return this.getRand()
            }
            return [rand, rand1, rand2]
        }
    },
    mounted() {
        this.$root.getJson('/api/products')
            .then(data => {
                for (let el of data) { this.filtered.push(el) }
                console.log(this.getRand());
                let r = this.getRand()
                this.onefiltered = this.filtered.filter(el => el.id_product === r[0])
                for (let el of this.onefiltered) { this.threefiltered.push(el) }
                this.onefiltered = this.filtered.filter(el => el.id_product === r[1])
                for (let el of this.onefiltered) { this.threefiltered.push(el) }
                this.onefiltered = this.filtered.filter(el => el.id_product === r[2])
                for (let el of this.onefiltered) {this.threefiltered.push(el)}
            });
    },
    template: `
        <div class="product alignment">
            <div class="greed12"></div>
            <threeproduct v-for="item of threefiltered" :key="item.id_product" :product="item"></threeproduct>
        </div>
    `
}