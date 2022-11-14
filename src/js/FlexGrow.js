import { navigation } from "./NavComp";
import { homepage } from "./Homepage";
import { catalog } from "./Catalog";
import { product } from "./ProductComp";
import { registration } from "./Registration";
import { cartpage } from "./Cartpage";

export const flexgrow = {
    components: {
        navigation,
        homepage,
        catalog,
        product,
        registration,
        cartpage
    },
    data(){
        return {}
    },
    template: `
    <div class="flex_grow">
        <navigation ref="ng"></navigation>
        <homepage></homepage>
        <product></product>
        <catalog></catalog>
        <registration></registration>
        <cartpage></cartpage>
    </div>
    `
};