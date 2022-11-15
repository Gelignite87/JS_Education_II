import { navigation } from "./Navigation";
import { error } from "./Error";
import { homepage } from "./Homepage";
import { catalog } from "./Catalog";
import { targetproduct } from "./TargetProduct";
import { registration } from "./Registration";
import { cartpage } from "./Cartpage";

export const filling = {
    components: {
        navigation,
        error,
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
        <navigation ref="navigation"></navigation>
        <error></error>
        <homepage ref="homepage"></homepage>
        <targetproduct></targetproduct>
        <catalog ref="catalog"></catalog>
        <registration></registration>
        <cartpage></cartpage>
    </div>
    `
};