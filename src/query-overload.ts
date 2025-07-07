import { productsV3 } from "@wix/stores";
import { cart } from "@wix/ecom";
import { createClient, OAuthStrategy } from "@wix/sdk";

const myWixClient = createClient({
    modules: { cart },
    auth: OAuthStrategy({
        clientId: "22bef345-3c5b-4c18-b782-74d4085112ff",
    })
});


async function queryProducts() {
    const res1 = await productsV3.queryProducts().ascending("_createdDate").find()
    const res2 = await productsV3.queryProducts({ fields: [  "ALL_CATEGORIES_INFO" ] }).ascending("_createdDate").find();
    const res3 = await productsV3.queryProducts({cursorPaging: {}});
    const res4 = await productsV3.queryProducts({cursorPaging: {}}, {fields: ["ALL_CATEGORIES_INFO"]});

    console.log(res1, res2, res3, res4);
}

queryProducts()
    .catch((error) => {
        console.error('Error searching products:', error);
    });

