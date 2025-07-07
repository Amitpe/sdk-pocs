import { productsV3 } from "@wix/stores";
import { cart } from "@wix/ecom";
import { createClient, OAuthStrategy } from "@wix/sdk";

const myWixClient = createClient({
    modules: { productsV3 },
    headers: { 'Authorization': '1HYkPEXwjn4uS9c9fkGqrhm26X3iU_iU3piFoFQNTQo.eyJpbnN0YW5jZUlkIjoiM2FmZTdmZmItYmRhYi00YWJhLTkyMTctNzRjMzhjYTFhMTQyIiwiYXBwRGVmSWQiOiIxMzgwYjcwMy1jZTgxLWZmMDUtZjExNS0zOTU3MWQ5NGRmY2QiLCJtZXRhU2l0ZUlkIjoiODY4NmViMmYtZWEyNC00ZTkzLWIwODEtZDQxMjhmZTk1ZTE0Iiwic2lnbkRhdGUiOiIyMDI1LTA3LTA3VDEwOjUwOjExLjgzNFoiLCJ1aWQiOiI4Zjk3ZDE3ZS1kNmEzLTQ0ZDEtYTE0OC05M2RkNTAwZjYzOTciLCJwZXJtaXNzaW9ucyI6Ik9XTkVSIiwidmVuZG9yUHJvZHVjdElkIjoic3RvcmVzX3NpbHZlciIsImRlbW9Nb2RlIjpmYWxzZSwib3JpZ2luSW5zdGFuY2VJZCI6Ijc5ZmU5YTY3LTk5NzEtNDVkNy1iNTI0LTFhMWRhMWQ1NzA3OCIsImJpVG9rZW4iOiJiYzc4OTRkNC01NzhmLTA0MjktMjI5Ni1hMGQxMDM0OGZmNTYiLCJzaXRlT3duZXJJZCI6IjhmOTdkMTdlLWQ2YTMtNDRkMS1hMTQ4LTkzZGQ1MDBmNjM5NyIsInNpdGVNZW1iZXJJZCI6IjhmOTdkMTdlLWQ2YTMtNDRkMS1hMTQ4LTkzZGQ1MDBmNjM5NyIsImV4cGlyYXRpb25EYXRlIjoiMjAyNS0wNy0wN1QxNDo1MDoxMS44MzRaIiwibG9naW5BY2NvdW50SWQiOiI4Zjk3ZDE3ZS1kNmEzLTQ0ZDEtYTE0OC05M2RkNTAwZjYzOTciLCJwYWkiOm51bGwsImxwYWkiOm51bGwsImFvciI6dHJ1ZSwic2NkIjoiMjAyNS0wNC0xMFQwNjo0NToyNi4xOTdaIiwiYWNkIjoiMjAxNi0wOC0wMlQxMjozNjoxNFoifQ' }
    // auth: OAuthStrategy({
    //     clientId: "22bef345-3c5b-4c18-b782-74d4085112ff",
    // })
});


async function queryProducts() {
    const res1 = (await myWixClient.productsV3.queryProducts().ascending('_createdDate').find()).items
    console.log('**** RES 1 ****************')
    console.log(res1)
    console.log('************************************************')

    const res2 = (await myWixClient.productsV3.queryProducts({ fields: ["ALL_CATEGORIES_INFO"] }).ascending('_createdDate').find()).items
    console.log('**** RES 2 ****************')
    console.log(res2)
    console.log('************************************************')


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

    console.log('**** RES 4 ****************')
    const res4 = (await myWixClient.productsV3.queryProducts({ sort:
        [
            {
                fieldName: 'createdDate',
                order: 'ASC'
            },
        ]
     }, { fields: ["ALL_CATEGORIES_INFO"] })).products;
    console.log(res4)
    console.log('************************************************')

    console.log(JSON.stringify(res1) === JSON.stringify(res3))
    console.log(JSON.stringify(res2) === JSON.stringify(res4))
}

queryProducts()
    .catch((error) => {
        console.error('Error searching products:', error);
    });

