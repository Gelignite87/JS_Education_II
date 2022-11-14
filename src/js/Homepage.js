export const homepage = {
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
                        <a href="index.html">
                            <p class="p1">THE BRAND</p>
                            <p class="p2">OF LUXERIOUS <span style="color: red">FASHION</span></p>
                        </a>
                    </div>
                </div>
                <div class="extra_menu">extra menu</div>
            </main>
            <section class="offer alignment">
                <a class="block_offer" href="product.html" @click.prevent="$root.updateState('product')">
                    <img class="img1" src="images/Offer1.jpg" alt="Offer1">
                    <p class="p9">30% OFF<br><span style="color: #F26376;">FOR WOMEN</span></p>
                </a>
                <div class="block_offer_w"></div>
                <a class="block_offer" href="product.html" @click.prevent="$root.updateState('product')">
                    <img class="img1" src="images/Offer2.jpg" alt="Offer2">
                    <p class="p9">HOT DEAL<br><span style="color: #F26376;">FOR MEN</span></p>
                </a>
                <div class="block_offer_w"></div>
                <a class="block_offer" href="product.html" @click.prevent="$root.updateState('product')">
                    <img class="img1" src="images/Offer3.jpg" alt="Offer3">
                    <p class="p9">NEW&nbsp;ARRIVALS<br><span style="color: #F26376;">FOR KIDS</span></p>
                </a>
            </section>
            <section class="block_offer1 alignment">
                <a href="product.html" @click.prevent="$root.updateState('product')">
                    <img class="img4" src="images/Offer4.jpg" alt="Offer4">
                    <p class="p10">LUXIROUS & TRENDY<br><span style="color: #F26376;">ACCESORIES</span></p>
                </a>
            </section>
            <!-- Product -->
            <section>
                <p class="p3">Fetured Items</p>
                <p style="margin: 6px auto 18px;" class="p4">Shop for items based on what we featured in this week
                </p>
                <div class="product alignment">
                    <div class="block_product">
                        <a href="product.html" @click.prevent="$root.updateState('product')"><img class="img img_block_product" src="images/Product1.png"
                                alt="Product1">
                            <div class="block_text_product">
                                <div style="margin: 10px 0 0 0;" class="block_text_product1">ELLERY X M'O CAPSULE</div>
                                <div class="block_text_product2">Known for her sculptural takes on traditional
                                    tailoring,
                                    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</div>
                                <div class="block_text_product3">$52.00</div>
                            </div>
                        </a>
                        <div class="wrapper_add_to_cart">
                            <a class="add_to_cart" href="1#">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p class="add_to_cart_text">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="block_product">
                        <a href="product.html" @click.prevent="$root.updateState('product')"><img class="img img_block_product" src="images/Product2.png"
                                alt="Product2">
                            <div class="block_text_product">
                                <div style="margin: 10px 0 0 0;" class="block_text_product1">ELLERY X M'O CAPSULE</div>
                                <div class="block_text_product2">Known for her sculptural takes on traditional
                                    tailoring,
                                    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</div>
                                <div class="block_text_product3">$52.00</div>
                            </div>
                        </a>
                        <div class="wrapper_add_to_cart">
                            <a class="add_to_cart" href="1#">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p class="add_to_cart_text">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="block_product">
                        <a href="product.html" @click.prevent="$root.updateState('product')"><img class="img img_block_product" src="images/Product3.png"
                                alt="Product3">
                            <div class="block_text_product">
                                <div style="margin: 10px 0 0 0;" class="block_text_product1">ELLERY X M'O CAPSULE</div>
                                <div class="block_text_product2">Known for her sculptural takes on traditional
                                    tailoring,
                                    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</div>
                                <div class="block_text_product3">$52.00</div>
                            </div>
                        </a>
                        <div class="wrapper_add_to_cart">
                            <a class="add_to_cart" href="1#">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p class="add_to_cart_text">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="block_product">
                        <a href="product.html" @click.prevent="$root.updateState('product')"><img class="img img_block_product" src="images/Product4.png"
                                alt="Product4">
                            <div class="block_text_product">
                                <div style="margin: 10px 0 0 0;" class="block_text_product1">ELLERY X M'O CAPSULE</div>
                                <div class="block_text_product2">Known for her sculptural takes on traditional
                                    tailoring,
                                    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</div>
                                <div class="block_text_product3">$52.00</div>
                            </div>
                        </a>
                        <div class="wrapper_add_to_cart">
                            <a class="add_to_cart" href="1#">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p class="add_to_cart_text">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="block_product">
                        <a href="product.html" @click.prevent="$root.updateState('product')"><img class="img img_block_product" src="images/Product5.png"
                                alt="Product5">
                            <div class="block_text_product">
                                <div style="margin: 10px 0 0 0;" class="block_text_product1">ELLERY X M'O CAPSULE</div>
                                <div class="block_text_product2">Known for her sculptural takes on traditional
                                    tailoring,
                                    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</div>
                                <div class="block_text_product3">$52.00</div>
                            </div>
                        </a>
                        <div class="wrapper_add_to_cart">
                            <a class="add_to_cart" href="1#">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p class="add_to_cart_text">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div class="block_product">
                        <a href="product.html" @click.prevent="$root.updateState('product')"><img class="img img_block_product" src="images/Product6.png"
                                alt="Product6">
                            <div class="block_text_product">
                                <div style="margin: 10px 0 0 0;" class="block_text_product1">ELLERY X M'O CAPSULE</div>
                                <div class="block_text_product2">Known for her sculptural takes on traditional
                                    tailoring,
                                    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</div>
                                <div class="block_text_product3">$52.00</div>
                            </div>
                        </a>
                        <div class="wrapper_add_to_cart">
                            <a class="add_to_cart" href="1#">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p class="add_to_cart_text">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                </div>
                <a class="button1" @click="$root.updateState('catalog')">Browse All Product</a>
            </section>
        </div>
    `
};