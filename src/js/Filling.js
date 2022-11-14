import { navigation } from "./Navigation";
import { homepage } from "./Homepage";
import { catalog } from "./Catalog";
import { targetproduct } from "./TargetProduct";
import { registration } from "./Registration";
import { cartpage } from "./Cartpage";

export const filling = {
    components: {
        navigation,
        homepage,
        catalog,
        targetproduct,
        registration,
        cartpage
    },
    data(){
        return {}
    },
    template: `
    <div>
        <navigation ref="ng"></navigation>
        <homepage></homepage>
        <targetproduct></targetproduct>
        <catalog></catalog>
        <registration></registration>
        <cartpage></cartpage>
    </div>
    `
};