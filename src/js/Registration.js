export const registration = {
    data() {
        return {}
    },
    template: `
    <div v-show="this.$root.state.registration">
    <main class="RGtop">
            <p class="RGtopTxt alignment RGtop__alignment">REGISTRATION</p>
        </main>
        <!-- Input -->
        <section>
            <div class="alignment RGwrapper_for_input">
                <div class="RGinput">
                    <div class="RGwrapper_input">
                        <div class="RGadress_title">Your Name</div>
                        <input class="RGinput2" type="text" placeholder="First Name">
                        <input class="RGinput2" type="text" placeholder="Last Name">
                        <div>
                            <input type="radio" name="gender" id="input_radio1" value="First" class="RGcustom_input"
                                data-p="90" data-c="40">
                            <label for="input_radio1">Male</label>
                            <input type="radio" name="gender" id="input_radio2" value="Second" class="RGcustom_input"
                                data-p="50" data-c="20">
                            <label for="input_radio2">Female</label>
                        </div>
                        <div class="RGadress_title">Login details</div>
                        <input class="RGinput2" type="email" placeholder="Email">
                        <input class="RGinput2" type="number" min="0" placeholder="Password">
                        <p class="RGp11">Please use 8 or more characters, with at least 1 number and a mixture of
                            uppercase and
                            lowercase letters</p>
                        <a class="RGbutton4" href="#">JOIN NOW &nbsp;&nbsp;&nbsp;&#8594;</a>
                    </div>
                </div>
                <!-- Input Part2 -->
                <div class="RGwrapper_input1">
                    <div class="RGp12">LOYALTY HAS ITS PERKS</div>
                    <div class="RGp12 RGp12_margin">Get in on the loyalty program where you can earn points and unlock
                        serious perks.
                        Starting with these as soon as you
                        join:</div>
                    <ol>
                        <li class="RGclass1">15% off welcome offer</li>
                        <li class="RGclass2">Free shipping, returns and exchanges on all orders</li>
                        <li class="RGclass3">$10 off a purchase on your birthday</li>
                        <li class="RGclass4">Early access to products</li>
                        <li class="RGclass5">Exclusive offers & rewards</li>
                    </ol>
                </div>
            </div>
        </section>
    </div>`
}