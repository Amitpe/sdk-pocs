import { productsV3 } from "@wix/stores";
import { cart } from "@wix/ecom";
import { OAuthStrategy, createClient } from "@wix/sdk";
import { members } from "@wix/members";


const myWixClient = createClient({
    modules: { productsV3, members },
    headers: { 'Authorization': '3lEmehalMcKEzcBk8la2NHE0f6GXyJWdq-CQ9iY3A00.eyJpbnN0YW5jZUlkIjoiODY4NmViMmYtZWEyNC00ZTkzLWIwODEtZDQxMjhmZTk1ZTE0IiwiYXBwRGVmSWQiOiIyMmJlZjM0NS0zYzViLTRjMTgtYjc4Mi03NGQ0MDg1MTEyZmYiLCJtZXRhU2l0ZUlkIjoiODY4NmViMmYtZWEyNC00ZTkzLWIwODEtZDQxMjhmZTk1ZTE0Iiwic2lnbkRhdGUiOiIyMDI1LTA3LTA4VDExOjIyOjQ1LjAxNloiLCJ1aWQiOiI4Zjk3ZDE3ZS1kNmEzLTQ0ZDEtYTE0OC05M2RkNTAwZjYzOTciLCJwZXJtaXNzaW9ucyI6Ik9XTkVSIiwiZGVtb01vZGUiOmZhbHNlLCJzaXRlT3duZXJJZCI6IjhmOTdkMTdlLWQ2YTMtNDRkMS1hMTQ4LTkzZGQ1MDBmNjM5NyIsInNpdGVNZW1iZXJJZCI6IjhmOTdkMTdlLWQ2YTMtNDRkMS1hMTQ4LTkzZGQ1MDBmNjM5NyIsImV4cGlyYXRpb25EYXRlIjoiMjAyNS0wNy0wOFQxNToyMjo0NS4wMTZaIiwibG9naW5BY2NvdW50SWQiOiI4Zjk3ZDE3ZS1kNmEzLTQ0ZDEtYTE0OC05M2RkNTAwZjYzOTciLCJhb3IiOnRydWUsInNjZCI6IjIwMjUtMDQtMTBUMDY6NDU6MjYuMTk3WiIsImFjZCI6IjIwMTYtMDgtMDJUMTI6MzY6MTRaIn0' }
    // auth: OAuthStrategy({
    //     clientId: "22bef345-3c5b-4c18-b782-74d4085112ff",
    // })
});


async function queryProducts() {
    // arguments = 0, always builder
    const res1 = (await myWixClient.productsV3.queryProducts().ascending('_createdDate').find()).items
    console.log('**** RES 1 ****************')
    console.log(res1)
    console.log('************************************************')

    
    // arguments = 1, runtime check on the argument if it fits CursorQuery or not
    // in this case it's not CursorQuery, so it's a builder
    const res2 = (await myWixClient.productsV3.queryProducts({ fields: ["ALL_CATEGORIES_INFO"] }).ascending('_createdDate').find()).items
    console.log('**** RES 2 ****************')
    console.log(res2)
    console.log('************************************************')
    

    // arguments = 1, runtime check on the argument if it fits CursorQuery or not
    // In this case it's CursorQuery, so it's the new query overload
    console.log('**** RES 3 ****************')
    const res3 = (await myWixClient.productsV3.queryProducts({
        sort:
            [
                {
                    fieldName: 'createdDate',
                    order: 'ASC'
                },
            ]
    })).products;
    console.log(res3)
    console.log('************************************************')

    
    // arguments = 1, runtime check on the argument if it fits CursorQuery or not
    // In this case it's an empty object, so it's the new query overload
    console.log('**** RES 3 ****************')
    const res4 = (await myWixClient.productsV3.queryProducts({})).products;
    console.log(res4)
    console.log('************************************************')


    // arguments = 2, always new query overload
    console.log('**** RES 4 ****************')
    const res5 = (await myWixClient.productsV3.queryProducts({ sort:
        [
            {
                fieldName: 'createdDate',
                order: 'ASC'
            },
        ]
     }, { fields: ["ALL_CATEGORIES_INFO"] })).products;
    console.log(res5)
    console.log('************************************************')

    console.log(JSON.stringify(res1) === JSON.stringify(res3))
    console.log(JSON.stringify(res2) === JSON.stringify(res5))
}

queryProducts()
    .catch((error) => {
        console.error('Error searching products:', error);
    });

