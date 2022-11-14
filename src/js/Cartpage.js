export const cartpage = {
    data() {
        return {}
    },
    template: `
    <div v-show="this.$root.state.cartpage">
    <main class="top">
            <p class="topTxt alignment top__alignment">REGISTRATION</p>
        </main>
        <!-- Input -->
        <section>
            <div class="alignment wrapper_for_input">
                <div class="input">
                    <div class="wrapper_input">
                        <div class="adress_title">Your Name</div>
                        <input class="input2" type="text" placeholder="First Name">
                        <input class="input2" type="text" placeholder="Last Name">
                        <div>
                            <input type="radio" name="gender" id="input_radio1" value="First" class="custom_input"
                                data-p="90" data-c="40">
                            <label for="input_radio1">Male</label>
                            <input type="radio" name="gender" id="input_radio2" value="Second" class="custom_input"
                                data-p="50" data-c="20">
                            <label for="input_radio2">Female</label>
                        </div>
                        <div class="adress_title">Login details</div>
                        <input class="input2" type="email" placeholder="Email">
                        <input class="input2" type="number" min="0" placeholder="Password">
                        <p class="p11">Please use 8 or more characters, with at least 1 number and a mixture of
                            uppercase and
                            lowercase letters</p>
                        <a class="button4" href="#">JOIN NOW &nbsp;&nbsp;&nbsp;&#8594;</a>
                    </div>
                </div>
                <!-- Input Part2 -->
                <div class="wrapper_input1">
                    <div class="p12">LOYALTY HAS ITS PERKS</div>
                    <div class="p12 p12_margin">Get in on the loyalty program where you can earn points and unlock
                        serious perks.
                        Starting with these as soon as you
                        join:</div>
                    <ol>
                        <li class="class1">15% off welcome offer</li>
                        <li class="class2">Free shipping, returns and exchanges on all orders</li>
                        <li class="class3">$10 off a purchase on your birthday</li>
                        <li class="class4">Early access to products</li>
                        <li class="class5">Exclusive offers & rewards</li>
                    </ol>
                </div>
            </div>
        </section>
    </div>`
}