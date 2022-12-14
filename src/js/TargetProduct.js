import { threeproducts } from "./ThreeProduct";

export const targetproduct = {
    components: { threeproducts },
    data(){
        return {}
    },
    template: `
    <div v-show="this.$root.state.targetproduct">
            <main class="PRtop">
                <div class="PRwrapper_top PRalignment">
                    <p class="PRtop_name">NEW ARRIVALS</p>
                    <div class="PRwrapper_top">
                        <a class="PRa_top1" href="index.html" @click.prevent="$root.updateState('homepage')">HOME</a>
                        <p class="PRp4">&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                        <a class="PRa_top1" href="#">WOMEN</a>
                        <p class="PRp4">&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                        <p class="PRa_top3">NEW ARRIVALS</p>
                    </div>
                </div>
            </main>
            <!-- Product -->
            <section>
                <div class="wrapper_carousel">
                    <a class="button_carousel" href="#"><i class="fa-solid fa-angle-left"></i></a>
                    <div class="img_carousel"><img class="img" src="images/Product8.png" alt="Product8"></div>
                    <a class="button_carousel" href="#"><i class="fa-solid fa-angle-right"></i></a>
                </div>
                <form action="#" class="PRposter PRalignment">
                    <p class="PRposter_p1">WOMEN COLLECTION</p>
                    <div class="PRposter_line1"></div>
                    <p class="PRp5">MOSCHINO CHEAP AND CHIC</p>
                    <p class="PRposter_p2">Compellingly actualize fully researched processes before proactive outsourcing.
                        Progressively
                        syndicate collaborative
                        architectures before cutting-edge services. Completely visualize parallel core competencies
                        rather than exceptional
                        portals.</p>
                    <p class="PRposter_p3">$561</p>
                    <div class="PRposter_line2"></div>
                    <div class="PRposter_flex">
                        <details>
                            <summary>CHOOSE COLOR</summary>
                            <select>
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="gray">Gray</option>
                            </select>
                        </details>
                        <details>
                            <summary>CHOOSE SIZE</summary>
                            <select class="select_mutation">
                                <option value="XXS">XXS</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </details>
                        <details>
                            <summary>QUANTITY</summary>
                            <input class="PRnumber_for_quantity" value="1" id="quantity" type="number" min="1" max="100">
                        </details>
                    </div>
                    <button class="PRbutton5" @click.prevent="$root.updateState('cartpage')"><i class="fa-solid fa-cart-shopping"></i> &nbsp Add to
                        Cart</button>
                </form>
            </section>
            <!-- Products -->
            <section>
                <threeproducts></threeproducts>
            </section>
        </div>`
};