const productsAll = [
    {
        name: 'Product 1',
        ean: '1112223334445',
        sku: '4445',
        price: 1500,
        product_id: '70604566',
        quantity: 1,
    },
    {
        name: 'Product 1',
        ean: '1112223334445',
        price: 1800,
        sku: '4445',
        product_id: '70604566',
        quantity: 3,
    },
    {
        name: 'Product 2',
        ean: '1112223334446',
        price: 1900,
        sku: '4446',
        product_id: '60404533',
        quantity: 2,
    },
    {
        name: 'Product 3',
        ean: '1112223334447',
        sku: '4447',
        product_id: '30504512',
        price: 2000,
        quantity: 8,
    },
];


// 1  
const productsPrice = productsAll.map(prices => prices.price)
// console.log(productsPrice)

// 2
productsAll.forEach(element => {
    // console.log(element.quantity)
});

// 3  
const filterPrice = productsAll.filter(product => product.price > 1800)
// console.log(filterPrice);

// 4 
const findProduct = productsAll.find(e => e.name.includes('2'))
console.log(findProduct);