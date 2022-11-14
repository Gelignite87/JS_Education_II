export const cartpage = {
    data() {
        return {}
    },
    template: `
    <div v-show="this.$root.state.cartpage">
    <main class="RGtop">
                <p class="RGtopTxt alignment RGtop__alignment">Shopping cart</p>
            </main>
            <!-- Product -->
            <section>
                <div class="alignment CTproduct__flex">
                    <div class="CTproduct__flex_1">
                        <div class="CTproductBlock CTproductBlock__flex">
                            <a href="#">
                                <div class="CTproductBlockText__img"><img class="img" src="images/Product3.png"
                                        alt="Product3">
                                </div>
                            </a>
                            <div class="CTproductBlockText CTproductBlockText__flex">
                                <div class="CTproductBlockText__flex_row">
                                    <div class="CTproductBlockText__txt">Mango people T&#8209Shirt</div>
                                    <a class="CTproductBlockTextButtonClose" href="#">x</a>
                                </div>
                                <div class="CTproductBlockText__txt_1">Price: <span
                                        class="CTproductBlockText__txt_2">$300</span>
                                </div>
                                <div class="CTproductBlockText__txt_1">Color: Red</div>
                                <div class="CTproductBlockText__txt_1">Size: XL</div>
                                <div class="CTproductBlockText__txt_1">Quantity: <div class="CTproductBlockText__txt_3">2
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="CTproductBlock CTproductBlock__flex">
                            <a href="#">
                                <div class="CTproductBlockText__img"><img class="img" src="images/Product7.png"
                                        alt="Product7">
                                </div>
                            </a>
                            <div class="CTproductBlockText CTproductBlockText__flex">
                                <div class="CTproductBlockText__flex_row">
                                    <div class="CTproductBlockText__txt">Mango people T&#8209Shirt</div>
                                    <a class="CTproductBlockTextButtonClose" href="#">x</a>
                                </div>
                                <div class="CTproductBlockText__txt_1">Price: <span
                                        class="CTproductBlockText__txt_2">$300</span>
                                </div>
                                <div class="CTproductBlockText__txt_1">Color: Red</div>
                                <div class="CTproductBlockText__txt_1">Size: XL</div>
                                <div class="CTproductBlockText__txt_1">Quantity: <div class="CTproductBlockText__txt_3">2
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="CTproductBlockTextButton CTproductBlockTextButton__flex">
                            <a class="CTbutton" href="#">CLEAR SHOPPING CART</a>
                            <a class="CTbutton" href="#">CONTINUE SHOPPING</a>
                        </div>
                    </div>
                    <!-- Adress -->
                    <div class="CTadress__flex">
                        <div class="CTadress__txt">SHIPPING ADRESS</div>
                        <input class="CTadress__input" type="text" placeholder="Bangladesh">
                        <input class="CTadress__input" type="text" placeholder="State">
                        <input class="CTadress__input" type="number" min="0" placeholder="Postcode / Zip">
                        <a class="CTbutton CTadress__button" href="#">GET A QUOTE</a>
                        <div class="CTgrandTotal CTgrandTotal__flex">
                            <div class="CTgrandTotal__txt">SUB TOTAL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$900</div>
                            <div class="CTgrandTotal__txt CTgrandTotal__txt_1">GRAND TOTAL &nbsp;&nbsp;&nbsp;&nbsp;<span
                                    class="CTgrandTotal__txt CTgrandTotal__txt_2">$900</span></div>
                            <div class="CTgrandTotalLine"></div>
                            <a class="CTbutton CTgrandTotal__button" href="#">PROCEED TO CHECKOUT</a>
                        </div>
                    </div>
                </div>
            </section>
    </div>`
}