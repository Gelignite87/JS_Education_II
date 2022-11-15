import { products } from "./Product";

export const homepage = {
    components: { products },
    data(){
        return {}
    },
    template: `
        <div v-show="this.$root.state.homepage">
            <main class="top">
                <div class="topImg"><img class="img1 imgNone" src="images/Top1.png" alt="top1">
                </div>
                <div class="top1" href="index.html">
                    <a href="index.html">
                        <div class="top1_1"><svg width="12" height="93" viewBox="0 0 12 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0.902344H0V92.9023H12V0.902344Z" fill="#F16D7F"/>
</svg>
                        </div>
                    </a>
                    <div class="top1_2">
                        <a href="index.html" @click.prevent="$root.updateState('homepage')">
                            <p class="p1">THE BRAND</p>
                            <p class="p2">OF LUXERIOUS <span style="color: red">FASHION</span></p>
                        </a>
                    </div>
                </div>
                <div class="extra_menu">extra menu</div>
            </main>
            <section class="offer alignment">
                <a class="block_offer" href="product.html" @click.prevent="$root.updateState('targetproduct')">
                    <img class="img1" src="images/Offer1.jpg" alt="Offer1">
                    <p class="p9">30% OFF<br><span style="color: #F26376;">FOR WOMEN</span></p>
                </a>
                <div class="block_offer_w"></div>
                <a class="block_offer" href="product.html" @click.prevent="$root.updateState('targetproduct')">
                    <img class="img1" src="images/Offer2.jpg" alt="Offer2">
                    <p class="p9">HOT DEAL<br><span style="color: #F26376;">FOR MEN</span></p>
                </a>
                <div class="block_offer_w"></div>
                <a class="block_offer" href="product.html" @click.prevent="$root.updateState('targetproduct')">
                    <img class="img1" src="images/Offer3.jpg" alt="Offer3">
                    <p class="p9">NEW&nbsp;ARRIVALS<br><span style="color: #F26376;">FOR KIDS</span></p>
                </a>
            </section>
            <section class="block_offer1 alignment">
                <a href="product.html" @click.prevent="$root.updateState('targetproduct')">
                    <img class="img4" src="images/Offer4.jpg" alt="Offer4">
                    <p class="p10">LUXIROUS & TRENDY<br><span style="color: #F26376;">ACCESORIES</span></p>
                </a>
            </section>
            <!-- Product -->
            <section>
                <p class="p3">Fetured Items</p>
                <p style="margin: 6px auto 18px;" class="p4">Shop for items based on what we featured in this week
                </p>
                <products ref="products"></products>
                <a class="button1" @click="$root.updateState('catalog')">Browse All Product</a>
            </section>
        </div>
    `
};