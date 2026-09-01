// program that stores a list of products with categories and prices, then filters products based on a given category

let products = [
    ["Laptop", "Electronics", 80000],
    ["Mobile", "Electronics", 30000],
    ["T-Shirt", "Clothing", 1500],
    ["Jeans", "Clothing", 2500],
    ["Mouse", "Electronics", 1000]
];

let category = prompt("Enter category:");

let filteredProducts = products.filter(function(product) {
    return product[1].toLowerCase() === category.toLowerCase();
});

console.log("Products in " + category + " category:");

console.log(filteredProducts);