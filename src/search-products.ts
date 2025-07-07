// import { productsV3 } from "@wix/stores";
// import { format } from 'pretty-format'
// import { createClient } from "@wix/sdk";
// import { bookings } from "@wix/bookings";
// // Import the auth strategy for the relevant access type
// // Import the relevant host module if needed

// const myWixClient = createClient({
//     modules: { productsV3 },
//     headers: {
//         'Authorization': 'i_nKgOrxoh-tc2RrOn7aX4S2rNVpv2sIihPCV_cgQik.eyJpbnN0YW5jZUlkIjoiODY4NmViMmYtZWEyNC00ZTkzLWIwODEtZDQxMjhmZTk1ZTE0IiwiYXBwRGVmSWQiOiIyMmJlZjM0NS0zYzViLTRjMTgtYjc4Mi03NGQ0MDg1MTEyZmYiLCJtZXRhU2l0ZUlkIjoiODY4NmViMmYtZWEyNC00ZTkzLWIwODEtZDQxMjhmZTk1ZTE0Iiwic2lnbkRhdGUiOiIyMDI1LTA1LTA0VDA2OjM4OjM4LjEzMFoiLCJ1aWQiOiI4Zjk3ZDE3ZS1kNmEzLTQ0ZDEtYTE0OC05M2RkNTAwZjYzOTciLCJwZXJtaXNzaW9ucyI6Ik9XTkVSIiwiZGVtb01vZGUiOmZhbHNlLCJzaXRlT3duZXJJZCI6IjhmOTdkMTdlLWQ2YTMtNDRkMS1hMTQ4LTkzZGQ1MDBmNjM5NyIsInNpdGVNZW1iZXJJZCI6IjhmOTdkMTdlLWQ2YTMtNDRkMS1hMTQ4LTkzZGQ1MDBmNjM5NyIsImV4cGlyYXRpb25EYXRlIjoiMjAyNS0wNS0wNFQxMDozODozOC4xMzBaIiwibG9naW5BY2NvdW50SWQiOiI4Zjk3ZDE3ZS1kNmEzLTQ0ZDEtYTE0OC05M2RkNTAwZjYzOTciLCJhb3IiOnRydWUsInNjZCI6IjIwMjUtMDQtMTBUMDY6NDU6MjYuMTk3WiIsImFjZCI6IjIwMTYtMDgtMDJUMTI6MzY6MTRaIn0'
//     }
// }); 

// async function searchProducts() {
//     const response = await myWixClient.productsV3.searchProducts({
//         filter: {
//             "variantsInfo.variants": {
//                 $matchItems: [ {
//                     'price.actualPrice.amount': { 
//                         $gte: 10
//                     }
//                 } ]
//             }
//         },
//         search: {
//             fields: [ 'name' ],
//             expression: 'flower',
//             mode: 'AND',
//         },
//         aggregations: [
//             {
//                 name: 'aggName',
//                 fieldPath: 'name',
//                 type: 'VALUE',
//                 value: {
//                     sortType: 'COUNT',
//                     sortDirection: 'ASC'
//                 }
//             }
//         ]
//     });
//     return response
// }

// searchProducts()
//     .then((response) => {
//         console.log('Search Products Response:', format(response.aggregationData));
//     })
//     .catch((error) => {
//         console.error('Error searching products:', error);
//     });

