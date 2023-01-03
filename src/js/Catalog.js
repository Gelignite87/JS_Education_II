import { products } from "./Product";

export const catalog = {
    components: { products },
    data(){
        return {}
    },
    template: `
    <div v-show="this.$root.state.catalog">
        <main class="CAtop">
                <div class="CAwrapper_top alignment">
                    <p class="CAtop_name">NEW ARRIVALS</p>
                    <div class="CAwrapper_top">
                        <a class="CAa_top1" href="index.html">HOME</a>
                        <p class="CAp4">&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                        <a class="CAa_top1" href="#">WOMEN</a>
                        <p class="CAp4">&nbsp;&nbsp;/&nbsp;&nbsp;</p>
                        <p class="CAa_top3">NEW ARRIVALS</p>
                    </div>
                </div>
            </main>
            <!-- Filter -->
            <section>
                <div class="CAfilter alignment">
                    <details class="CAfilter_left">
                        <summary class="CAsummary_mutation CAfilter_left_p">FILTER &nbsp;&nbsp;<i
                                class="fa-solid fa-arrow-down-wide-short"></i></summary>
                        <nav class="CAfilter_block_menu_transparent">
                        </nav>
                        <nav class="CAfilter_block_menu">
                            <details>
                                <summary class="CAa_top3 CAsummary_mutation_in CAfilter_left_p">CATEGORY</summary>
                                <div>
                                    <p class="CAsummary_mutation_in_p">Accessories</p>
                                    <p class="CAsummary_mutation_in_p">Bags</p>
                                    <p class="CAsummary_mutation_in_p">Denim</p>
                                    <p class="CAsummary_mutation_in_p">Hoodies & Sweatshirts</p>
                                    <p class="CAsummary_mutation_in_p">Jackets & Coats</p>
                                    <p class="CAsummary_mutation_in_p">Polos</p>
                                    <p class="CAsummary_mutation_in_p">Shirts</p>
                                    <p class="CAsummary_mutation_in_p">Shoes</p>
                                    <p class="CAsummary_mutation_in_p">Sweaters & Knits</p>
                                    <p class="CAsummary_mutation_in_p">T-Shirts</p>
                                    <p class="CAsummary_mutation_in_p">Tanks</p>
                                </div>
                            </details>
                            <details>
                                <summary class="CAa_top3 CAsummary_mutation_in CAfilter_left_p">BRAND</summary>
                                <div>
                                    <p class="CAsummary_mutation_in_p">Accessories</p>
                                    <p class="CAsummary_mutation_in_p">Bags</p>
                                    <p class="CAsummary_mutation_in_p">Denim</p>
                                    <p class="CAsummary_mutation_in_p">Hoodies & Sweatshirts</p>
                                    <p class="CAsummary_mutation_in_p">Jackets & Coats</p>
                                    <p class="CAsummary_mutation_in_p">Polos</p>
                                    <p class="CAsummary_mutation_in_p">Shirts</p>
                                    <p class="CAsummary_mutation_in_p">Shoes</p>
                                    <p class="CAsummary_mutation_in_p">Sweaters & Knits</p>
                                    <p class="CAsummary_mutation_in_p">T-Shirts</p>
                                    <p class="CAsummary_mutation_in_p">Tanks</p>
                                </div>
                            </details>
                            <details>
                                <summary class="CAa_top3 CAsummary_mutation_in CAfilter_left_p_last">DESIGNER</summary>
                                <div>
                                    <p class="CAsummary_mutation_in_p">Accessories</p>
                                    <p class="CAsummary_mutation_in_p">Bags</p>
                                    <p class="CAsummary_mutation_in_p">Denim</p>
                                    <p class="CAsummary_mutation_in_p">Hoodies & Sweatshirts</p>
                                    <p class="CAsummary_mutation_in_p">Jackets & Coats</p>
                                    <p class="CAsummary_mutation_in_p">Polos</p>
                                    <p class="CAsummary_mutation_in_p">Shirts</p>
                                    <p class="CAsummary_mutation_in_p">Shoes</p>
                                    <p class="CAsummary_mutation_in_p">Sweaters & Knits</p>
                                    <p class="CAsummary_mutation_in_p">T-Shirts</p>
                                    <p class="CAsummary_mutation_in_p_last">Tanks</p>
                                </div>
                            </details>
                        </nav>
                    </details>
                    <div>
                        <div class="CAfilter_right">
                            <details class="CAfilter_right_relative">
                                <summary>TRENDING NOW</summary>
                                <div class="CAfilter_right_block_center">

                                </div>
                            </details>
                            <details>
                                <summary>SIZE</summary>
                                <div class="CAfilter_right_block">
                                    <div class="CAblock_input CAform-check">
                                        <input class="form-check-input" type="checkbox" id="checkbox1" value="First">
                                        <label class="CAlabel_input" for="checkbox1">XS</label>
                                        <br>
                                        <input class="form-check-input" type="checkbox" id="checkbox2" value="Second">
                                        <label class="CAlabel_input" for="checkbox2">S</label>
                                        <br>
                                        <input class="form-check-input" type="checkbox" id="checkbox3" value="Third">
                                        <label class="CAlabel_input" for="checkbox3">M</label>
                                        <br>
                                        <input class="form-check-input" type="checkbox" id="checkbox4" value="Four">
                                        <label class="CAlabel_input" for="checkbox4">L</label>
                                    </div>
                                </div>
                            </details>
                            <details>
                                <summary>PRICE</summary>
                                <div class="CAfilter_right_block">

                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Product -->
            <section>
            <products ref="products"></products>
            </section>
            <!-- Pagination -->
            <nav aria-label="Page navigation example">
                <ul class="CApagination CAjustify-content-center">
                    <li class="CApage-item  CAli"><a class="CApage-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&#60;</span></a></li>
                    <li class="CApage-item CAli"><a class="CApage-link active" href="#">1</a></li>
                    <li class="CApage-item CAli"><a class="CApage-link" href="#">2</a></li>
                    <li class="CApage-item CAli"><a class="CApage-link" href="#">3</a></li>
                    <li class="CApage-item CAli"><a class="CApage-link" href="#">4</a></li>
                    <li class="CApage-item CAli"><a class="CApage-link" href="#">5</a></li>
                    <li class="CApage-item CAli"><a class="CApage-link" href="#">6</a></li>
                    <li class="CApage-item CAli"><a class="CApage-link" href="#">7</a></li>
                    <li class="CApage-item CAli"><a class="CApage-link" href="#">8</a></li>
                    <li class="CApage-item CAli"><a class="CApage-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&#62;</span></a></li>
                </ul>
            </nav>
        </div>
    </div>`
};